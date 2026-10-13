---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-tester': patch
---

Add the POS Cash Drawer API (`shopify.cashDrawer`) to the `pos.home.tile.render` and `pos.home.modal.render` target types. POS already exposes the API on these targets at runtime, so the types now match what extensions can call.
