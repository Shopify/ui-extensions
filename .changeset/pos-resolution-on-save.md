---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-tester': minor
---

Add `shopify.resolution.onSave` to the POS validation resolution targets so an extension can commit pending work before POS re-runs the intercepted validation. Registering a handler asynchronously returns its cleanup function.
