---
'@shopify/ui-extensions': patch
---

Remove the POS background `scan` event from 2026-10. POS doesn't dispatch it in this version, so `POS_EVENT_NAMES.SCAN`, `ScanEvent` and the `scan` entry in `ShopifyEventMap` are removed. The event is planned for 2027-01.
