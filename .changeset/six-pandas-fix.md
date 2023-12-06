---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-react': minor
---

The `purchase.checkout.shipping-option-list.render-before` and `purchase.checkout.shipping-option-list.render-after` will be duplicated for possible types of delivery groups (One Time Purchase and Subscription).
You can use the new `target` or `useDeliveryGroupTarget()` React hook to denote each delivery group in your extension.
