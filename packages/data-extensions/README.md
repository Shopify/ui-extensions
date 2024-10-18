# `@shopify/data-extensions`

This package contains the public type definitions and utilities needed to create a Shopify data extension.

## What is a data extension?

A data extension is a JavaScript-based module that can hook in to client-side behaviors on Shopify’s first party UI surface areas. It differs from a UI extension in that it does not establish a long-lived channel or render any UI on the surface. It runs once and returns data.

Currently, this package contains the API for one surface.

- [`admin`](./src/surfaces/admin)

All extensions, regardless of where they appear in Shopify, make use of the same [underlying technology](../../documentation/how-extensions-work.md) and most of the same capabilities (e.g., direct API access, session tokens).

A data extension using “vanilla” JavaScript would be written as follows:

```ts
import {dataExtension} from '@shopify/data-extensions/admin';

export default dataExtension(
  'admin.product-details.action.should-render',
  (root, {data}) => {
    ...
    return {display: true}
  },
);
```
