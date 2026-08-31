---
'@shopify/ui-extensions-tester': minor
---

`extension.dispatch()` now stamps the dispatched event with its `type`, matching what the POS runtime delivers to `shopify.addEventListener` listeners, and accepts the payload without `type`. Assertions that compared a listener's argument to the raw payload should now expect the added `type` field.
