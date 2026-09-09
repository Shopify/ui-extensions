---
'@shopify/ui-extensions': minor
---

Adds an optional `productCategory` field to the point of sale `LineItem` interface, exposing the product's Shopify Standard Product Taxonomy category (`id`, `name`, `fullName`) so receipt and cart extensions can read it without a separate lookup.
