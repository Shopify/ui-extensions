---
'@shopify/ui-extensions': patch
---

Adds support for the following extension targets:

- `purchase.address-autocomplete.suggest`: An extension target that provides address autocomplete suggestions for address forms at checkout. Suggestions are presented to customers for delivery, billing, and pickup point addresses.
- `purchase.address-autocomplete.format-suggestion`: An extension target that formats the selected address suggestion provided by a `purchase.address-autocomplete.suggest` target. This formatted address is used to auto-populate the fields of the address form.
