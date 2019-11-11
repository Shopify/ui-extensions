// swift-tools-version:5.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "AppExtensionLib",
    products: [
        .library(name: "AppExtensionLib", targets: ["AppExtensionLib"]),
    ],
    targets: [
        .target(
            name: "AppExtensionLib",
            dependencies: [],
            path: "AppExtensionLib"),
    ]
)
