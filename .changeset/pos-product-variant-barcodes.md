---
'@shopify/ui-extensions': minor
---

Add `ProductVariant.barcodes` to the POS Product Search API for API version 2027-01. Each barcode is an object with a `value` string, with the primary barcode first. Deprecate the primary-only `barcode` property in favor of `barcodes` while retaining it for compatibility. Document that product search matches primary and secondary variant barcodes.
