# `@shopify/ui-extensions`

This package contains the public type definitions and utilities needed to create a Shopify UI extension. This is a generalized package that is intended to be the long-term home of the surface-specific packages in this repository, like `@shopify/checkout-ui-extensions` and `@shopify/admin-ui-extensions`.

Currently, this package contains the API for two [surfaces](https://github.com/Shopify/ui-extensions-private/discussions/1770#discussion-4324275):

- [`admin`](./src/surfaces/admin)
- [`checkout`](./src/surfaces/checkout)

This surface-based grouping is mostly cosmetic; all extensions use the same underlying technology, and most of the same “core” components (e.g., `Layout`, `BlockStack`, etc) and capabilities (e.g., direct API access, session tokens). Separating APIs by surface makes it easier for a developer to see what is available to them in each context, and gives us a flexible system for introducing components and APIs available in only some surfaces.

An admin extension using “vanilla” JavaScript would be written as follows:

```ts
import {
  extension,
  TextField,
  EditorSettings,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Admin::CheckoutEditor::RenderSettings',
  (root, {settings, applySettingChange}) => {
    const editorSettings = root.createComponent(EditorSettings);

    const textfield = root.createComponent(TextField, {
      label: 'Message',
      helpText: 'The message to show to buyers when this extension is rendered',
      value: settings.current.message,
      onChange(value) {
        applySettingsChange({key: 'message', value});
      },
    });

    editorSettings.appendChild(textfield);
    root.appendChild(editorSettings);
  },
);
```

## What is a “UI Extension”?

A UI extension is a JavaScript-based module that can hook in to client-side behaviors on any of Shopify’s first party UI surface areas. No matter whether the developer is embedding into the admin or checkout, whether they are rendering UI or [registering listeners for client-side events](https://shopify.dev/apps/pixels); it’s all a UI extension.

The most minimal definition of a UI extension has the following properties:

- A **name** that is presented to merchants when interacting with the extension.
- The **extension points** that the UI extension implements. These are represented with string identifiers that describe the surface and responsibility of the extension. For example, [`Checkout::CartLines::RenderAfter`](https://shopify.dev/api/checkout-extensions/checkout/extension-points/api) gives the UI Extension the ability to render UI after the cart lines in a checkout; [`WebPixel::Register`](https://shopify.dev/apps/pixels/pixel-extension) registers a Web Pixel to track client-side events. A UI Extension can register to support multiple extension points, and must map each to a JavaScript module in their application.

The types in this package allow us to represent additional details about the extension points developers can implement. Each extension point can define what APIs it supports, including:

- What **UI Components** are available to be rendered, and what properties those UI components accept
- What **imperative APIs** are provided by the host, for reading and writing data relevant to the extension

The available components and APIs can be different for each extension point. Additionally, Shopify can vary the components and APIs it provides based on many other factors at runtime, like:

- Whether an extension is built by Shopify or a third party
- Whether the API client that owns the extension has certain approval scopes,
- Whether the shop or API client has particular beta flags enabled
