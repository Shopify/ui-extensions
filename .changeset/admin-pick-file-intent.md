---
'@shopify/ui-extensions': patch
'@shopify/ui-extensions-tester': patch
---

Add `pick` action and `shopify/File` resource type to the admin Intents API, enabling extensions to open the file picker via `intents.invoke('pick:shopify/File', …)`.
