# Argo Admin CLI

The Argo Admin CLI allows you to build and preview Argo Admin Extensions. This tool is intended to help partners test Argo Extensions before publishing to Shopify.
It comes packaged with [Shopify CLI](https://shopify.github.io/shopify-app-cli/core), so when you create an extension using Shopify CLI's `shopify create extension` command, your project will automatically consume this package.

Start using this tool in one of two ways:

1. **Create an extension with [Shopify CLI](https://shopify.github.io/shopify-app-cli/core/#create)**  
    Shopify CLI clones `argo-admin-template` repo, which consumes this package to build and serve Argo Extensions it generates
1. **Manually clone the [argo-admin-template](https://github.com/Shopify/argo-admin-template)**  
    Bypass Shopify CLI and follow the set up steps in the README from `argo-admin-template`

## How to use

When consumed in a project, the command `argo-admin-cli` becomes available to the project. The command can be used to build and serve Argo Admin Extensions.

To use this package in an Argo Extension project, run:
```sh
npm install @shopify/argo-admin-cli
```

or

```sh
yarn add @shopify/argo-admin-cli
```

See usage details in the [API docs](./api.md).

## Local development of this tool

To make and preview changes from `./src`, run a local server from this project using:

```bash
yarn server
```
