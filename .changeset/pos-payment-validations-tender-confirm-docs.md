---
'@shopify/ui-extensions': patch
---

Document `paymentvalidations` dispatch timing: fires when a tender is confirmed but not yet committed, once per tender attempt (split payments dispatch per tender).
