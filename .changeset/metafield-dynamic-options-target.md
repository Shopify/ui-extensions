---
'@shopify/ui-extensions': minor
---

Add the `admin.metafields.options.data` runnable extension target, with its `MetafieldOptionsApi` input and `MetafieldOptionsOutput` output types. An app can supply presentation-only options for its own metafield definitions in the admin's native metafield editors, without writing a `choices` validation. The target is `@private` while it is gated to Shopify-owned apps in Core.
