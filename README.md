# Argo for Checkout

This repo contains a collection of packages for using Shopify’s Argo for Checkout. Which one you read depends on the extension you are building:

- If you’re building an extension for the main checkout flow, you’ll need to read [`@shopify/argo-checkout`](packages/argo-checkout), which has all of the typings for the API available to Argo extensions in checkout. It also has documentation for the available [global API](packages/argo-checkout/documentation/globals.md), [extension points](packages/argo-checkout/documentation/extension-points.md), and [components](packages/argo-checkout/documentation/components.md).
- If you’re building a post-purchase extension, the package you need to care about is [`@shopify/argo-post-purchase`](packages/argo-post-purchase), which contains the same documentation noted above for the post-purchase extension points.

This repo also has some of the helper packages Shopify uses to make Argo extensions easy to develop and deploy:

- [`@shopify/argo-run`](packages/argo-run) is a tiny asset dev server and production asset builder, powered by [webpack](https://webpack.js.org)
- [`@shopify/argo-webpack-hot-client`](packages/argo-webpack-hot-client) is an Argo-compatible replacement for [webpack-hot-client](https://github.com/webpack-contrib/webpack-hot-client) that enables auto-reloading in Argo extensions.
