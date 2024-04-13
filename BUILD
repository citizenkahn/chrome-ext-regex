load("@rules_pkg//:pkg.bzl", "pkg_zip")

genrule(
    name = "version",
    outs = ["version.txt"],
    cmd = "git describe --tags --abbrev=0 > $@",
)

genrule(
    name = "versioned_extension_pkg",
    srcs = [":extension_pkg", ":version.txt"],
    outs = ["extension_pkg_versioned.zip"],
    cmd = "read version < $(location :version.txt); mv $(location :extension_pkg) $@_$${version}",
)

pkg_zip(
    name = "extension_pkg",
    srcs = glob(["src/**/*"]),
    package_dir = "src/",
)