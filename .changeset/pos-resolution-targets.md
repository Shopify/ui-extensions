---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-tester': minor
---

Add types for the POS validation resolution targets (`pos.cart.validations.resolution.render`, `pos.payment.validations.resolution.render`) and the target-scoped `shopify.resolution` API. Intercept event types now match their runtime payloads: plain objects carrying `type` and the event's data, no longer extending DOM `Event`.
