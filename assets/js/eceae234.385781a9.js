/*! For license information please see eceae234.385781a9.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8484],{2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,l){for(var a,i,u=o(e),d=1;d<arguments.length;d++){for(var s in a=Object(arguments[d]))r.call(a,s)&&(u[s]=a[s]);if(t){i=t(a);for(var c=0;c<i.length;c++)n.call(a,i[c])&&(u[i[c]]=a[i[c]])}}return u}},1535:function(e,t,r){var n=r(2525),o="function"==typeof Symbol&&Symbol.for,l=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,d=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,c=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||k}function w(){}function B(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||k}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var N=B.prototype=new w;N.constructor=B,n(N,v.prototype),N.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,o={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var d=Array(u),s=0;s<u;s++)d[s]=arguments[s+2];o.children=d}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:l,type:e,key:a,ref:i,props:o,_owner:O.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var P=/\/+/g,x=[];function E(e,t,r,n){if(x.length){var o=x.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function T(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case l:case a:i=!0}}if(i)return r(n,e,""===t?"."+D(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var d=t+D(o=e[u],u);i+=T(o,d,r,n)}else if(null===e||"object"!=typeof e?d=null:d="function"==typeof(d=h&&e[h]||e["@@iterator"])?d:null,"function"==typeof d)for(e=d.call(e),u=0;!(o=e.next()).done;)i+=T(o=o.value,d=t+D(o,u++),r,n);else if("object"===o)throw r=""+e,Error(b(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function z(e,t,r){return null==e?0:T(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?R(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function R(e,t,r,n,o){var l="";null!=r&&(l=(""+r).replace(P,"$&/")+"/"),z(e,q,t=E(t,l,n,o)),I(t)}var U={current:null};function $(){var e=U.current;if(null===e)throw Error(b(321));return e}},7378:function(e,t,r){r(1535)},4137:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||c[f]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4780:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var n=r(7462),o=r(3366),l=(r(7378),r(4137)),a=["components"],i={id:"on-prem",title:"On-prem Quickstart",sidebar_label:"On-prem Quickstart"},u=void 0,d={unversionedId:"on-prem",id:"on-prem",title:"On-prem Quickstart",description:"BuildBuddy is designed to be easy to run on-premise for those use cases where data absolutely must not leave a company's servers. It can be run your own servers, or in your own cloud environment. It supports major cloud providers like GCP, AWS, and Azure.",source:"@site/../docs/on-prem.md",sourceDirName:".",slug:"/on-prem",permalink:"/docs/on-prem",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/on-prem.md",tags:[],version:"current",lastUpdatedBy:"Siggi",lastUpdatedAt:1615320644,formattedLastUpdatedAt:"3/9/2021",frontMatter:{id:"on-prem",title:"On-prem Quickstart",sidebar_label:"On-prem Quickstart"},sidebar:"someSidebar",previous:{title:"Cloud Quickstart",permalink:"/docs/cloud"},next:{title:"Contributing",permalink:"/docs/contributing"}},s=[{value:"Getting started",id:"getting-started",children:[],level:2},{value:"Bazel Run",id:"bazel-run",children:[],level:2},{value:"Docker Image",id:"docker-image",children:[],level:2},{value:"Kubernetes",id:"kubernetes",children:[{value:"Custom configuration",id:"custom-configuration",children:[],level:3},{value:"Output to yaml file",id:"output-to-yaml-file",children:[],level:3},{value:"Number of replicas",id:"number-of-replicas",children:[],level:3},{value:"Restart behavior",id:"restart-behavior",children:[],level:3},{value:"Enterprise deployment",id:"enterprise-deployment",children:[],level:3}],level:2},{value:"Helm",id:"helm",children:[],level:2},{value:"Configuring BuildBuddy",id:"configuring-buildbuddy",children:[],level:2}],c={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"BuildBuddy is designed to be easy to run on-premise for those use cases where data absolutely must not leave a company's servers. It can be run your own servers, or in your own cloud environment. It supports major cloud providers like GCP, AWS, and Azure."),(0,l.kt)("p",null,"The software itself is open-source and easy to audit."),(0,l.kt)("p",null,"For companies, we offer an ",(0,l.kt)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise")," version of BuildBuddy that contains advanced features like OIDC Auth, API access, and more."),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("p",null,"There are four ways to run BuildBuddy on-prem:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#bazel-run"},"Bazel Run"),": get the source and run a simple ",(0,l.kt)("inlineCode",{parentName:"li"},"bazel run")," command."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#docker-image"},"Docker Image"),": pre-built Docker images running the latest version of BuildBuddy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kubernetes"},"Kubernetes"),": deploy BuildBuddy to your Kubernetes cluster with a one-line deploy script."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#helm"},"Helm"),": deploy BuildBuddy to your Kubernetes cluster with the official BuildBuddy helm charts.")),(0,l.kt)("h2",{id:"bazel-run"},"Bazel Run"),(0,l.kt)("p",null,'The simplest method of running BuildBuddy on your own computer is to download and run it with "bazel run". Doing that is simple:'),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Get the source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git clone "https://github.com/buildbuddy-io/buildbuddy"\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Navigate into the BuildBuddy directory")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd buildbuddy\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Build and run using bazel")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bazel run -c opt server:buildbuddy\n")),(0,l.kt)("p",null,"We recommend using a tool like ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazelisk"},"Bazelisk")," that respects the repo's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/.bazelversion"},".bazelversion")," file."),(0,l.kt)("h2",{id:"docker-image"},"Docker Image"),(0,l.kt)("p",null,"We publish a ",(0,l.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," image with every release that contains a pre-configured BuildBuddy."),(0,l.kt)("p",null,"To run it, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull gcr.io/flame-public/buildbuddy-app-onprem:latest && docker run -p 1985:1985 -p 8080:8080 gcr.io/flame-public/buildbuddy-app-onprem:latest\n")),(0,l.kt)("p",null,"If you'd like to pass a custom configuration file to BuildBuddy running in a Docker image - see the ",(0,l.kt)("a",{parentName:"p",href:"/docs/config"},"configuration docs")," on using Docker's ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"-v flag"),"."),(0,l.kt)("p",null,"Note: If you're using BuildBuddy's Docker image locally and a third party gRPC cache, you'll likely need to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"--network=host")," ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},"flag")," to your ",(0,l.kt)("inlineCode",{parentName:"p"},"docker run")," command in order for BuildBuddy to be able to pull test logs and timing information from the external cache."),(0,l.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,l.kt)("p",null,'If you run or have access to a Kubernetes cluster, and you have the "kubectl" command configured, we provide a shell script that will deploy BuildBuddy to your cluster, namespaced under the "buildbuddy" namespace.'),(0,l.kt)("p",null,"This script uses ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/deployment/buildbuddy-app.onprem.yaml"},"this deployment file"),", if you want to see the details of what is being configured."),(0,l.kt)("p",null,"To kick of the Kubernetes deploy, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash k8s_on_prem.sh\n")),(0,l.kt)("h3",{id:"custom-configuration"},"Custom configuration"),(0,l.kt)("p",null,"Note: the ",(0,l.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," script requires ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")," version 1.15")," or higher to be installed."),(0,l.kt)("p",null,"To pass in a custom ",(0,l.kt)("a",{parentName:"p",href:"/docs/config"},"config file"),", you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-config")," flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -config my-config.yaml\n")),(0,l.kt)("h3",{id:"output-to-yaml-file"},"Output to yaml file"),(0,l.kt)("p",null,"By default the ",(0,l.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," script will use ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply")," to deploy BuildBuddy to your current Kubernetes cluster. If you'd like to output the Kubernetes deployment to a yaml file instead that can be checked in, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-out")," flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -out my-buildbuddy-deployment.yaml\n")),(0,l.kt)("h3",{id:"number-of-replicas"},"Number of replicas"),(0,l.kt)("p",null,"By default the ",(0,l.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," script will deploy a single replica of BuildBuddy. If you've configured a MySQL database, storage, and other options necessary to support multiple replicas, you can increase the number of BuildBuddy replicas to deploy with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-replicas")," flag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -replicas 3\n")),(0,l.kt)("h3",{id:"restart-behavior"},"Restart behavior"),(0,l.kt)("p",null,"By default the ",(0,l.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," will restart your BuildBuddy deployment to pick up any changes in your configuration file. This can lead to brief downtime if only one replica is deployed. You can disable this behavior with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-norestart")," flag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -norestart\n")),(0,l.kt)("h3",{id:"enterprise-deployment"},"Enterprise deployment"),(0,l.kt)("p",null,"If you've obtained a BuildBuddy enterprise license, you deploy enterprise BuildBuddy by specifying the ",(0,l.kt)("inlineCode",{parentName:"p"},"-enterprise")," flag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -enterprise\n")),(0,l.kt)("h2",{id:"helm"},"Helm"),(0,l.kt)("p",null,"If you run or have access to a Kubernetes cluster and are comfortable with ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),", we maintain official BuildBuddy Helm charts that are easy to configure and deploy."),(0,l.kt)("p",null,"They have options to deploy everything necessary to use all of BuildBuddy's bells and whistles - including MySQL, nginx, and more."),(0,l.kt)("p",null,"The official BuildBuddy charts live in our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm"},"buildbuddy-helm repo")," and can be added to helm with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add buildbuddy https://helm.buildbuddy.io\n")),(0,l.kt)("p",null,"You can the deploy BuildBuddy Open Source with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install buildbuddy buildbuddy/buildbuddy \\\n  --set mysql.mysqlUser=sampleUser \\\n  --set mysql.mysqlPassword=samplePassword\n")),(0,l.kt)("p",null,"For more information on configuring your BuildBuddy Helm deploy, check out the charts themselves:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy"},"BuildBuddy Open Source")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise"))),(0,l.kt)("h2",{id:"configuring-buildbuddy"},"Configuring BuildBuddy"),(0,l.kt)("p",null,"For documentation on all BuildBuddy configuration options, check out our ",(0,l.kt)("a",{parentName:"p",href:"/docs/config"},"configuration documentation"),"."))}p.isMDXComponent=!0}}]);