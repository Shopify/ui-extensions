---
'@shopify/ui-extensions': minor
---

Added optional `discountAllocations` field to Cart Line Item API so that POS extensions can see the precise proportion of a discount applied to a particular line item. Only the `allocatedAmount` field is included for this purpose, matching the Storefront API structure. See https://shopify.dev/docs/api/storefront/latest/objects/DiscountAllocation.
