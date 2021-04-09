# Upgrading from `@shopify/argo-checkout(-react)` to `@shopify/argo-post-purchase(-react)`

In `@shopify/argo-checkout` and `@shopify/argo-checkout-react` version 0.10.x, we have removed the post-purchase extensions temporarily as we work towards broader availability of checkout extensions. The post-purchase APIs you import from `@shopify/argo-checkout` have been moved to `@shopify/argo-post-purchase` (or `@shopify/argo-post-purchase-react` for the React bindings). These new packages start at the same semantic version as the last release of the `@shopify/argo-checkout` package that contained these APIs. To upgrade, first make sure your extension works on the latest `0.9.x` version of `@shopify/argo-checkout(-react)`. Once you have confirmed that, swap out your dependency on `@shopify/argo-checkout(-react)` with the matching post-purchase package:

```diff
// package.json
{
  "dependencies": {
-     "@shopify/argo-checkout": "^0.9.0"
+     "@shopify/argo-post-purchase": "^0.9.0"
  }
}
```
