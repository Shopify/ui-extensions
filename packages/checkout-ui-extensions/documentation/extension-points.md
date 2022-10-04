{% include /apps/checkout/plus-merchants.md %}

# Extension points

A checkout UI extension will register for one or more extension points using [`shopify.extend()`](./globals.md). An extension point in a UI extension is a plain JavaScript function. This function receives some API for interacting with the application, and is expected to return a value in a specific shape. The input arguments and the output type are different for each extension point.

The following extension points are available for checkout UI extensions:

- `Checkout::Dynamic::Render`, used to build extensions that the merchant can position anywhere in their checkout.
