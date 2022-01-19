# About Post Purchase UI Extensions

This API reference describes the technical details of how to build your Post Purchase UI Extensions. It covers the available extension points, including their input and output types and their structure.

For more information, refer to [the post-purchase extension overview](/apps/checkout/post-purchase/) and [Building a post-purchase checkout extension](/apps/checkout/post-purchase/getting-started-post-purchase-extension).

# Extension points

An App Bridge Checkout extension will register for one or more extension points using [`shopify.extend()`](./globals.md). An extension point in an App Bridge Checkout extension is a plain JavaScript function. This function receives some API for interacting with the application, and is expected to return a value in a specific shape. The input arguments and the output type are different for each extension point.

The current extension points are available for post-purchase:

- [`Checkout::PostPurchase::ShouldRender` and `Checkout::PostPurchase::Render`](../src/extension-points/api/post-purchase), used to build post-purchase interstitials for cross sell applications.

# Configuration file

Post-purchase extensions have a configuration file named `extension.config.yml` in their root folder. This file is used for setting up dependencies that your extension needs to run.

When an extension is published to Shopify, the contents of this file are pushed alongside it. Currently, the configuration file only supports specifying the [metafields](/api/admin-graphql/latest/objects/metafield) that your extension needs to read. If your app needs to read metafields for various resources ([Shop](/api/admin-graphql/latest/objects/shop), [Product](/api/admin-graphql/latest/objects/product), and [ProductVariant](/api/admin-graphql/latest/objects/productvariant)), then you can specify these metafields using key value pairs in the config file. Any public metafield can be read. You can specify up to five key/namespace pairs in the config file. While executing the extensions, Shopify looks for the metafields in each resource and returns their contents.

**Example:**

```yml
---
metafields:
  - namespace: my-namespace
    key: my-key
  - namespace: my-namespace
    key: my-key-2
```

## Development

The configuration file alone will not work in development as Shopify needs to know the file's contents before running the extension. In development, you must pass the configuration as the `config` query parameter.

The command `shopify serve` outputs the complete string that you must add to a checkout URL, including the contents of the config file. If you use the [browser extension](https://drive.google.com/drive/folders/16l4mJsyElvH8Wb-ggvNmB6NfVWrqOs4J), then it automatically appends the config query string to the checkout URL. For example, `https://your-test-store.myshopify.com/46071709864/checkouts/a7706e44c6c6b99b9899e1a87d5ec07b/post_purchase?script_url=http://localhost:39351/assets/extension.js&config={"metafields":[{"namespace":"my-namespace","key":"my-key"},{"namespace":"my-namespace","key":"my-key-2"}]}&api_key=myapikey`.

The following example includes the URL-encoded version: `https://your-test-store.myshopify.com/46071709864/checkouts/a7706e44c6c6b99b9899e1a87d5ec07b/post_purchase?script_url=http%3A%2F%2Flocalhost%3A39351%2Fassets%2Fextension.js&config=%7B%22metafields%22%3A%5B%7B%22namespace%22%3A%22my-namespace%22%2C%22key%22%3A%22my-key%22%7D%2C%7B%22namespace%22%3A%22my-namespace%22%2C%22key%22%3A%22my-key-2%22%7D%5D%7D&api_key=myapikey`

When updating the configuration file, it's important to note that you need to restart your local server for the changes to take effect. Similarly, the browser extension might take up to 60 seconds before appending the updated values. If you don't want to wait, then disabling and then re-enabling the extension forces a refresh.
