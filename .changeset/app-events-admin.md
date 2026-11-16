---
'@shopify/ui-extensions': minor
---

`appEvents`: add `shopify.appEvents.emit(eventHandle, attributes?)` to the Admin standard API, for reporting app events to Shopify. Admin, Checkout and Customer Account now share one `AppEvents` type, and the Admin entry exports the app event types.
