---
'@shopify/ui-extensions-tester': minor
---

Add `shopify.intercept` mocking for POS background extensions: `extension.fireIntercept()` runs the registered interceptor with host-contract semantics (one interceptor per event, synchronous only), and new `createPosCart`, `createCartValidationsEventData`, and `createPaymentValidationsEventData` factories build intercept payloads and `shopify.resolution.event` values.
