{% include /apps/checkout/plus-merchants.md %}

# Extension points

A checkout UI extension will register for one or more extension points using [`shopify.extend()`](./globals.md). An extension point in a UI extension is a plain JavaScript function. This function receives some API for interacting with the application, and is expected to return a value in a specific shape. The input arguments and the output type are different for each extension point.

- Extension points can either be [static or dynamic](https://shopify.dev/api/checkout-extensions/checkout#extension-points), where static extension points are tied to specific core checkout features, and dynamic extension points are positioned by the merchant through the checkout editor.
- [All extension points](https://shopify.dev/api/checkout-extensions/checkout/extension-points/api) can be rendered only in [supported locations](https://shopify.dev/api/checkout-extensions/checkout#supported-locations).
