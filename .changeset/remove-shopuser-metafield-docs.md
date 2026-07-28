---
'@shopify/ui-extensions': patch
---

Remove `shopUser` from the documented `AppMetafieldEntryTarget` resource types for checkout UI extensions. Shop User metafields were never released publicly and are not a supported metafield target for partner extensions; keeping the value in the public API reference caused partners to attempt using an unsupported capability.
