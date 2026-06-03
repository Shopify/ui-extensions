---
'@shopify/ui-extensions': patch
---

Narrow the `pos.app.ready.data` cart API surface to readonly. The background extension target's `shopify.cart` now only exposes the subscribable `current` signal; cart mutation methods (`addLineItem`, `clearCart`, `applyCartDiscount`, `setCustomer`, etc.) are not typed on this target. Cart mutation remains available to interactive render targets via the unchanged `CartApi`.

Internally this splits `CartApiContent` into `ReadonlyCartApiContent` + `MutableCartApiContent` (both re-exported), and introduces `ReadonlyCartApi` for use in `DataTargetApi`.
