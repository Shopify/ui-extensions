# Extension points

An Argo extension will register for one or more extension points using [`shopify.extend()`](./globals.md). An extension point in an Argo extension is a plain JavaScript function. This function receives some API for interacting with the application, and is expected to return a value in a specific shape. The input arguments and the output type are different for each extension point.

The current extension points are available for post-purchase:

- [`Checkout::PostPurchase::ShouldRender` and `Checkout::PostPurchase::Render`](../src/extension-points/api/post-purchase), used to build post-purchase interstitials for cross sell applications.
