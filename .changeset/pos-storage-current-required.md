---
'@shopify/ui-extensions': minor
---

Make the POS `Storage.current` property required. It is always populated by the host, so marking it optional forced consumers to handle a `possibly undefined` case that can never occur.
