---
'@shopify/ui-extensions': patch
'@shopify/ui-extensions-tester': patch
---

Remove the deprecated POS `.observe` event extension targets: `pos.transaction-complete.event.observe`, `pos.cash-tracking-session-start.event.observe`, `pos.cash-tracking-session-complete.event.observe`, and `pos.cart-update.event.observe`. These were early-access targets with effectively no production usage.

Use the `pos.app.ready.data` background target instead: `shopify.addEventListener('transactioncomplete' | 'cashtrackingsessionstart' | 'cashtrackingsessioncomplete', callback)` for the event targets, and `shopify.cart.current.subscribe()` for cart updates.

This also removes the `EventExtensionTargets`/`EventExtensionTarget` types and the `TransactionCompleteData`, `CashTrackingSessionStartData`, `CashTrackingSessionCompleteData`, and `CartUpdateEventData` payload types. The receipt-target type `TransactionCompleteWithReprintData` is unchanged.
