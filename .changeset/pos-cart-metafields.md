---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-tester': minor
---

Add metafields to the POS Cart API: `cart.current.metafields` for the cart, and `metafields` on each line item through the new `CartLineItem` type, which `cart.current.lineItems` and `shopify.cartLineItem` now use. `addLineItem` accepts `metafields` in its options. The tester's mock cart and `createCartLineItem()` start with no metafields.
