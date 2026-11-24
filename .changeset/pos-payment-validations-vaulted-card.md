---
'@shopify/ui-extensions': minor
---

Add `vaultedCard` to `InterceptedPaymentMethodType`, so POS `paymentvalidations` interceptors can tell a charge to a customer's saved card from a cash tender. The event name, the `amount` and the optional `identifier` are unchanged.
