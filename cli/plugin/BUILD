load("@io_bazel_rules_go//go:def.bzl", "go_library")

go_library(
    name = "plugin",
    srcs = ["plugin.go"],
    importpath = "github.com/buildbuddy-io/buildbuddy/cli/plugin",
    visibility = ["//visibility:public"],
    deps = [
        "//cli/log",
        "//cli/storage",
        "//cli/workspace",
        "//server/util/disk",
        "//server/util/git",
        "//server/util/status",
        "@in_gopkg_yaml_v2//:yaml_v2",
    ],
)
