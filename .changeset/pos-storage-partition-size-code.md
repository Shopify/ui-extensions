---
'@shopify/ui-extensions': patch
---

POS `StorageError.code` gains `'PartitionSize'`: `storage.set()` throws it when a write would take the partition's total stored size past its limit.
