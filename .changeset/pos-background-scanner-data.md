---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-tester': patch
---

Expose POS scanner sources and scan events on the `pos.app.ready.data` target. Scanner sources are read-only state available through `shopify.scanner.sources`, while scans are delivered as discrete `scan` events via `shopify.addEventListener('scan', ...)`.
