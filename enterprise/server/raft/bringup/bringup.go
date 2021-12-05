package bringup

import (
	"context"
	"fmt"
	"sort"
	"sync"
	"time"

	"github.com/buildbuddy-io/buildbuddy/enterprise/server/raft/constants"
	"github.com/buildbuddy-io/buildbuddy/enterprise/server/raft/keys"
	"github.com/buildbuddy-io/buildbuddy/enterprise/server/raft/rbuilder"
	"github.com/buildbuddy-io/buildbuddy/server/gossip"
	"github.com/buildbuddy-io/buildbuddy/server/util/grpc_client"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/golang/protobuf/proto"
	"github.com/hashicorp/serf/serf"
	"github.com/lni/dragonboat/v3"
	"golang.org/x/sync/errgroup"

	raftConfig "github.com/buildbuddy-io/buildbuddy/enterprise/server/raft/config"
	rfpb "github.com/buildbuddy-io/buildbuddy/proto/raft"
	rfspb "github.com/buildbuddy-io/buildbuddy/proto/raft_service"
	dbsm "github.com/lni/dragonboat/v3/statemachine"
)

type ClusterStarter struct {
	// The nodehost and function used to create
	// on disk statemachines for new clusters.
	nodeHost             *dragonboat.NodeHost
	createStateMachineFn dbsm.CreateOnDiskStateMachineFunc

	grpcAddr string

	// the set of hosts passed to the Join arg
	listenAddr    string
	join          []string
	gossipManager *gossip.GossipManager

	bootstrapped bool

	// a mutex that protects the function sending bringup
	// requests so we only attempt one auto bringup at a time.
	sendingStartRequestsMu sync.Mutex

	log log.Logger
}

func NewClusterStarter(nodeHost *dragonboat.NodeHost, grpcAddr string, createStateMachineFn dbsm.CreateOnDiskStateMachineFunc, gossipMan *gossip.GossipManager) *ClusterStarter {
	cs := &ClusterStarter{
		nodeHost:             nodeHost,
		createStateMachineFn: createStateMachineFn,
		grpcAddr:             grpcAddr,
		listenAddr:           gossipMan.ListenAddr,
		join:                 gossipMan.Join,
		gossipManager:        gossipMan,
		bootstrapped:         false,
		log:                  log.NamedSubLogger(nodeHost.ID()),
	}
	sort.Strings(cs.join)
	return cs
}

func (cs *ClusterStarter) rejoinConfiguredClusters() (int, error) {
	nodeHostInfo := cs.nodeHost.GetNodeHostInfo(dragonboat.NodeHostInfoOption{})
	clustersAlreadyConfigured := 0
	for _, logInfo := range nodeHostInfo.LogInfo {
		if cs.nodeHost.HasNodeInfo(logInfo.ClusterID, logInfo.NodeID) {
			cs.log.Infof("Had info for cluster: %d, node: %d.", logInfo.ClusterID, logInfo.NodeID)
			r := raftConfig.GetRaftConfig(logInfo.ClusterID, logInfo.NodeID)
			if err := cs.nodeHost.StartOnDiskCluster(nil, false /*=join*/, cs.createStateMachineFn, r); err != nil {
				return clustersAlreadyConfigured, err
			}
			clustersAlreadyConfigured += 1
			cs.log.Infof("Recreated cluster: %d, node: %d.", logInfo.ClusterID, logInfo.NodeID)
		}
	}
	return clustersAlreadyConfigured, nil
}

func (cs *ClusterStarter) InitializeClusters() error {
	// Attempt to rejoin any configured clusters. This looks at what is
	// stored on disk and attempts to rejoin any clusters that this nodehost
	// was previously a member of. If none were found, we'll attempt auto
	// auto bringup below...
	clustersAlreadyConfigured, err := cs.rejoinConfiguredClusters()
	if err != nil {
		return err
	}

	// Set a flag indicating if initial cluster bringup still needs to
	// happen. If so, bringup will be triggered when all of the nodes
	// in the Join list have announced themselves to us.
	cs.bootstrapped = clustersAlreadyConfigured > 0
	cs.log.Infof("%d clusters already configured. (bootstrapped: %t)", clustersAlreadyConfigured, cs.bootstrapped)

	if cs.listenAddr != cs.join[0] {
		return nil
	}

	go func() {
		for !cs.bootstrapped {
			if err := cs.attemptQueryAndBringupOnce(); err != nil {
				cs.log.Errorf("attemptQueryAndBringupOnce err: %s", err)
			} else {
				cs.bootstrapped = true
			}
		}
	}()
	return nil
}

// Runs one round of the algorithm that queries gossip for other bringup nodes
// and attempts cluster bringup.
func (cs *ClusterStarter) attemptQueryAndBringupOnce() error {
	rsp, err := cs.gossipManager.Query(constants.AutoBringupEvent, nil, nil)
	if err != nil {
		return err
	}
	bootstrapInfo := make(map[string]string, 0)
	for nodeRsp := range rsp.ResponseCh() {
		if nodeRsp.Payload == nil {
			continue
		}
		br := &rfpb.BringupResponse{}
		if err := proto.Unmarshal(nodeRsp.Payload, br); err != nil {
			continue
		}
		if br.GetNhid() == "" || br.GetGrpcAddress() == "" {
			continue
		}
		bootstrapInfo[br.GetNhid()] = br.GetGrpcAddress()
		if len(bootstrapInfo) == len(cs.join) {
			ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
			defer cancel()
			return cs.sendStartClusterRequests(ctx, bootstrapInfo)
		}
	}
	return status.FailedPreconditionErrorf("Unable to find other join nodes: %+s", bootstrapInfo)
}

func (cs *ClusterStarter) OnEvent(updateType serf.EventType, event serf.Event) {
	if cs.bootstrapped {
		return
	}
	switch updateType {
	case serf.EventQuery:
		query, _ := event.(*serf.Query)
		if query.Name != constants.AutoBringupEvent {
			return
		}
		rsp := &rfpb.BringupResponse{
			Nhid:        cs.nodeHost.ID(),
			GrpcAddress: cs.grpcAddr,
		}
		buf, err := proto.Marshal(rsp)
		if err != nil {
			return
		}
		if err := query.Respond(buf); err != nil {
			cs.log.Debugf("Error responding to gossip query: %s", err)
		}
	default:
		break
	}
}

type bootstrapNode struct {
	grpcAddress string
	nodeHostID  string
	index       uint64
}

type ClusterBootstrapInfo struct {
	clusterID      uint64
	nodes          []bootstrapNode
	initialMembers map[uint64]string
	Replicas       []*rfpb.ReplicaDescriptor
}

func MakeBootstrapInfo(clusterID uint64, nodeGrpcAddrs map[string]string) *ClusterBootstrapInfo {
	bi := &ClusterBootstrapInfo{
		clusterID:      clusterID,
		initialMembers: make(map[uint64]string, len(nodeGrpcAddrs)),
		nodes:          make([]bootstrapNode, 0, len(nodeGrpcAddrs)),
		Replicas:       make([]*rfpb.ReplicaDescriptor, 0, len(nodeGrpcAddrs)),
	}
	i := uint64(1)
	for nhid, grpcAddress := range nodeGrpcAddrs {
		bi.nodes = append(bi.nodes, bootstrapNode{
			grpcAddress: grpcAddress,
			nodeHostID:  nhid,
			index:       i,
		})
		bi.Replicas = append(bi.Replicas, &rfpb.ReplicaDescriptor{
			ClusterId: clusterID,
			NodeId:    i,
		})
		bi.initialMembers[i] = nhid
		i += 1
	}
	return bi
}

func StartCluster(ctx context.Context, bootstrapInfo *ClusterBootstrapInfo, batch *rbuilder.BatchBuilder) error {
	log.Warningf("StartCluster called with bootstrapInfo: %+v", bootstrapInfo)
	rangeSetupTime := rbuilder.NewBatchBuilder().Add(&rfpb.DirectWriteRequest{
		Kv: &rfpb.KV{
			Key:   constants.LocalRangeSetupTimeKey,
			Value: []byte(fmt.Sprintf("%d", time.Now().UnixNano())),
		},
	})
	batch = batch.Merge(rangeSetupTime)
	batchProto, err := batch.ToProto()
	if err != nil {
		return err
	}

	eg, ctx := errgroup.WithContext(ctx)
	for _, node := range bootstrapInfo.nodes {
		node := node
		eg.Go(func() error {
			conn, err := grpc_client.DialTarget("grpc://" + node.grpcAddress)
			if err != nil {
				return err
			}
			client := rfspb.NewApiClient(conn)
			_, err = client.StartCluster(ctx, &rfpb.StartClusterRequest{
				ClusterId:     bootstrapInfo.clusterID,
				NodeId:        node.index,
				InitialMember: bootstrapInfo.initialMembers,
				Batch:         batchProto,
			})
			if err != nil {
				if !status.IsAlreadyExistsError(err) {
					log.Errorf("Start cluster returned err: %s", err)
					return err
				}
			}
			return nil
		})
	}

	return eg.Wait()
}

// This function is called to send RPCs to the other nodes listed in the Join
// list requesting that they bring up initial cluster(s).
func (cs *ClusterStarter) sendStartClusterRequests(ctx context.Context, nodeGrpcAddrs map[string]string) error {
	startingRanges := []*rfpb.RangeDescriptor{
		&rfpb.RangeDescriptor{
			Left:  keys.Key{constants.MinByte},
			Right: keys.Key{constants.MaxByte},
		},
	}
	clusterID := uint64(constants.InitialClusterID)
	for _, rangeDescriptor := range startingRanges {
		bootstrapInfo := MakeBootstrapInfo(clusterID, nodeGrpcAddrs)
		fillReplicas(bootstrapInfo, rangeDescriptor)
		rdBuf, err := proto.Marshal(rangeDescriptor)
		if err != nil {
			return err
		}

		batch := rbuilder.NewBatchBuilder().Add(&rfpb.DirectWriteRequest{
			Kv: &rfpb.KV{
				Key:   constants.LocalRangeKey,
				Value: rdBuf,
			},
		})

		// If this is the first range, we need to write some special
		// information to the metarange on startup. Do that here.
		if clusterID == uint64(constants.InitialClusterID) {
			batch = batch.Add(&rfpb.IncrementRequest{
				Key:   constants.LastClusterIDKey,
				Delta: 1,
			})
			batch = batch.Add(&rfpb.DirectWriteRequest{
				Kv: &rfpb.KV{
					Key:   keys.RangeMetaKey(rangeDescriptor.GetRight()),
					Value: rdBuf,
				},
			})
			batch = batch.Add(&rfpb.DirectWriteRequest{
				Kv: &rfpb.KV{
					Key:   constants.InitClusterSetupTimeKey,
					Value: []byte(fmt.Sprintf("%d", time.Now().UnixNano())),
				},
			})
		}
		if err := StartCluster(ctx, bootstrapInfo, batch); err != nil {
			return err
		}
		log.Printf("StartCluster started a new cluster successfully!")

		// TODO(increment cluster ID here)
	}
	return nil
}

func fillReplicas(bootstrapInfo *ClusterBootstrapInfo, rangeDescriptor *rfpb.RangeDescriptor) {
	for _, node := range bootstrapInfo.nodes {
		rangeDescriptor.Replicas = append(rangeDescriptor.Replicas, &rfpb.ReplicaDescriptor{
			ClusterId: bootstrapInfo.clusterID,
			NodeId:    node.index,
		})
	}
}