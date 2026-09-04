---
'@shopify/ui-extensions': minor
---

Add the POS background `scan` host event types: `POS_EVENT_NAMES.SCAN`, a public `ScanEvent` payload with guaranteed decoded `data` and normalized `source` (`camera`, `external`, or `embedded`), and the matching `ShopifyEventMap` entry so `pos.app.ready.data` extensions can register `shopify.addEventListener('scan', ...)`. The event is delivered after POS has finished handling the scan itself.
