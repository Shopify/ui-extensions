# UI Extensions

This repo contains the public definition of Shopify’s UI extension API. App developers can use these libraries for a strongly-typed, optimized development experience that lets them focus on integrating their app’s features deep into Shopify workflows. You can learn more about what is possible with UI extensions in [Shopify’s developer documentation](https://shopify.dev/api/checkout-extensions/checkout).

> **Note:** UI extensions are a [versioned API](https://shopify.dev/api/usage/versioning). This branch contains the APIs for the `2026-04-rc` API version. The following API versions are available as separate branches in this repo: [`2025-07`](https://github.com/Shopify/ui-extensions/tree/2025-07), [`2025-10`](https://github.com/Shopify/ui-extensions/tree/2025-10)

Shopify provides UI extension APIs via the [`@shopify/ui-extensions` package](./packages/ui-extensions/) which lets developers use a small, strongly-typed JavaScript API for creating UI extensions

## What are “UI extensions”?

A UI extension is a JavaScript-based module that can hook in to client-side behaviors on any of Shopify’s first party UI surface areas. The most minimal definition of a UI extension has the following properties, which are configured in a `shopify.extension.toml` file in your project:

- A `name` that is presented to merchants when interacting with the extension.
- The [`target`](https://shopify.dev/docs/apps/app-extensions/configuration#targets) that the UI extension wishes to inject into. These are represented with string identifiers that describe the surface and responsibility of the extension. For example, [`purchase.checkout.cart-line-item.render-after` target](https://shopify.dev/docs/api/checkout-ui-extensions/latest/targets) gives a UI Extension the ability to render UI after the each cart line in a checkout.
- The JavaScript `module` in your local project that will be run to render UI.

The types in this package allow us to represent additional details about the targets developers can implement. Each target can have a custom set of APIs available to it, which includes:

- What **UI Components** are available to be rendered, and what properties those UI components accept
- What **imperative APIs** are provided by the host application, for reading and writing data relevant to the extension

UI extensions are built on an open source project called, [remote-dom](https://github.com/Shopify/remote-dom), which allows them to render native UI elements while being safely sandboxed.

> **Note:** If you are migrating from an API version prior to `2025-10`, you can follow the [migration guide](https://shopify.dev/docs/api/checkout-ui-extensions/2025-10/upgrading-to-2025-10).
