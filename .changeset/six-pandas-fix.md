---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-react': minor
---

The `purchase.checkout.shipping-option-list.render-before` and `purchase.checkout.shipping-option-list.render-after` extension targets now include a `target` to represents the delivery group it is rendering for.

This is also accessible using the new `useDeliveryGroupTarget()` react hook.
