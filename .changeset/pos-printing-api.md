---
'@shopify/ui-extensions': minor
---

Add the POS `shopify.printing` API. `shopify.printing.getPrinters()` discovers hardware printers currently available to the device, and `shopify.printing.print(src, options?)` prints content fetched from a URL — opening the system print dialog by default, or sending directly to a printer when a `printer` (from `getPrinters()`) is passed via `options`. This supersedes `shopify.print`, which is now deprecated.
