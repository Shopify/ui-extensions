---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-tester': minor
---

Add `shopify.applyMetafieldChange()` to POS targets that can change the cart. It takes one metafield change, or a list of up to 25, and sets or removes metafields on the cart and its line items. It uses the change and result types of checkout UI extensions, plus two new line item change types: `updateCartLineMetafield` and `removeCartLineMetafield`. The tester's target mocks include a stub that resolves with success results.
