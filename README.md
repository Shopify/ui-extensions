# UI Extensions

This repo contains the public definition of Shopify’s UI extension API. App developers can use these libraries for a strongly-typed, optimized development experience that lets them focus on integrating their app’s features deep into Shopify workflows. You can learn more about what is possible with UI extensions in [Shopify’s developer documentation](https://shopify.dev/api/checkout-extensions/checkout).

> **Note:** UI extensions are a [versioned API](https://shopify.dev/api/usage/versioning). This branch contains the APIs for the `2022-10` API version. The following API versions are available as separate branches in this repo: [`2023-01`](https://github.com/Shopify/ui-extensions/tree/2023-01), [`unstable`](https://github.com/Shopify/ui-extensions/tree/unstable)

Shopify provides different “variants” of UI extension APIs that are suitable for different developers:

- [`@shopify/ui-extensions`](./packages/ui-extensions/) lets developers use a small, strongly-typed JavaScript API for creating UI extensions
- [`@shopify/ui-extensions-react`](./packages/ui-extensions-react/) lets developers create UI extensions using [React](https://reactjs.org/), a popular JavaScript library for building user interfaces

## What are “UI extensions”?

A UI extension is a JavaScript-based module that can hook in to client-side behaviors on any of Shopify’s first party UI surface areas. The most minimal definition of a UI extension has the following properties:

- A **name** that is presented to merchants when interacting with the extension.
- The **extension points** that the UI extension implements. These are represented with string identifiers that describe the surface and responsibility of the extension. For example, [`Checkout::CartLines::RenderAfter`](https://shopify.dev/api/checkout-extensions/checkout/extension-points/api) gives the UI Extension the ability to render UI after the cart lines in a checkout. A UI Extension can register to support multiple extension points, and must map each to a JavaScript module in their application.

The types in this package allow us to represent additional details about the extension points developers can implement. Each extension point can define what APIs it supports, including:

- What **UI Components** are available to be rendered, and what properties those UI components accept
- What **imperative APIs** are provided by the host, for reading and writing data relevant to the extension

The available components and APIs can be different for each extension point. Additionally, Shopify can vary the components and APIs it provides based on many other factors at runtime, like:

- Whether the API client that owns the extension has certain approval scopes,
- Whether the shop or API client has particular beta flags enabled

We have also written a [technical explanation of how extensions work under the hood](./documentation/how-extensions-work.md) for those who want to learn more.
