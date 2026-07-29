---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-tester': minor
---

Add the `pos.resolution.action.render` extension target for POS. This target renders a resolution side panel beside the cart when a `beforeCheckout` intercept returns a blocking validation. The target's API includes the standard API, a write-capable Cart API, read-only navigation (`currentEntry` only — `navigate`/`back` are rejected host-side), and a new `ResolutionApi` that exposes the validation handle, severity, and message.
