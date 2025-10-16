# `@shopify/ui-extensions`

This package contains the public type definitions and utilities needed to create Shopify UI extensions.

This package supports the development of UI extension for [Admin](https://shopify.dev/docs/api/admin-extensions), [Customer account](https://shopify.dev/docs/api/customer-account-ui-extensions), [POS](https://shopify.dev/docs/api/pos-ui-extensions), and [Checkout](https://shopify.dev/docs/api/checkout-ui-extensions) surfaces.

All extensions, regardless of where they appear in Shopify, make use of the same [underlying technology](https://github.com/Shopify/remote-dom), and most of the same “core” components (e.g., `s-block`, `s-button`, `s-text-field`, etc) and capabilities (e.g., direct API access, session tokens). Separating APIs by surface makes it easier for a developer to see what is available to them in each context, and gives us a flexible system for introducing components and APIs available in only some areas of Shopify.

> **Note:** If you are migrating from an API version prior to `2025-10`, you can follow the [migration guide](https://shopify.dev/docs/api/checkout-ui-extensions/2025-10/upgrading-to-2025-10).

A checkout extension using Preact would be written as follows:

```ts
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-text>Line item title: {shopify.target.value.merchandise.title}</s-text>
  );
}
```
