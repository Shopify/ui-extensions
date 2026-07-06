---
'@shopify/ui-extensions': minor
---

Added an optional `options` argument to the POS `cart.addLineItem` method so a single call can create a line item and decorate it with line-item properties (`properties`) in one operation. This avoids the extra native call and cart sync of chaining `addLineItem` → `addLineItemProperties`. Backwards compatible—the third argument is optional. Adds the `AddLineItemOptions` type.
