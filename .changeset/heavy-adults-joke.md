---
'@shopify/ui-extensions-react': minor
'@shopify/ui-extensions': minor
---

Added `CartInstructions` (accessed using `api.instructions`) to checkout. These represent the cart instructions used to create the checkout and possibly limit extension capabilities. These instructions should be checked prior to performing any actions that may be affected by them.

For example, if you intend to add a discount code via the `applyDiscountCodeChange` method, check `api.instructions.discounts.canUpdateDiscountCodes` to ensure it's supported in this checkout.
