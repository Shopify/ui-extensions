# UI Extensions

This repo contains the public definition of Shopify’s UI extension API. App developers can use these libraries for a strongly-typed, optimized development experience that lets them focus on integrating their app’s features deep into Shopify workflows. You can learn more about what is possible with UI extensions in [Shopify’s developer documentation](https://shopify.dev/api/checkout-extensions/checkout).

> **Note:** UI extensions are a [versioned API](https://shopify.dev/api/usage/versioning). This branch contains the APIs for the `2023-04` API version. The following API versions are available as separate branches in this repo: [`unstable`](https://github.com/Shopify/ui-extensions/tree/unstable)

Shopify provides different “variants” of UI extension APIs that are suitable for different developers:

- [`@shopify/ui-extensions`](./packages/ui-extensions/) lets developers use a small, strongly-typed JavaScript API for creating UI extensions
- [`@shopify/ui-extensions-react`](./packages/ui-extensions-react/) lets developers create UI extensions using [React](https://reactjs.org/), a popular JavaScript library for building user interfaces

## What are “UI extensions”?

A UI extension is a JavaScript-based module that can hook in to client-side behaviors on any of Shopify’s first party UI surface areas. The most minimal definition of a UI extension has the following properties, which are configured in a `shopify.extension.toml` file in your project:

- A `name` that is presented to merchants when interacting with the extension.
- The [`target`](https://shopify.dev/docs/apps/app-extensions/configuration#targets) that the UI extension wishes to inject into. These are represented with string identifiers that describe the surface and responsibility of the extension. For example, [`purchase.checkout.cart-line-item.render-after` target](https://shopify.dev/docs/api/checkout-ui-extensions/unstable/apis/extensiontargets) gives a UI Extension the ability to render UI after the each cart line in a checkout.
- The JavaScript `module` in your local project that will be run to render UI.

The types in this package allow us to represent additional details about the targets developers can implement. Each target can have a custom set of APIs available to it, which includes:

- What **UI Components** are available to be rendered, and what properties those UI components accept
- What **imperative APIs** are provided by the host application, for reading and writing data relevant to the extension

UI extensions are built on an open source project called, [remote-ui](https://github.com/Shopify/remote-ui), which allows them to render native UI elements while being safely sandboxed. If you want to learn more, we’ve written a [technical explanation of how extensions work under the hood](./documentation/how-extensions-work.md).
