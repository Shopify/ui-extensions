---
'@shopify/ui-extensions': minor
---

Add return and exchange carts to the POS Cart API: `cartType`, `cart.return`, and the `CartType`, `Order`, `ReturnLineItem` and `ReturnReason` types. `Cart` is now a union type discriminated by `cartType`. `OrderApiContent` and `DraftOrderApiContent` now extend `Order`.
