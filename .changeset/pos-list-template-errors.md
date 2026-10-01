---
'@shopify/ui-extensions': patch
---

`posListTemplate` now rejects `{{else}}` and `{{…}}` placeholders in `templateId`, names the `templateId` of the template an error was raised in, and explains when it is called as a function instead of as a tagged template. `s-pos-list` `onRowClick` events now type `event.detail` as `{item, index}` instead of `any`.
