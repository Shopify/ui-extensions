---
'@shopify/ui-extensions': minor
---

Add `fiscalDeviceIdentifier` to the POS Device API. `shopify.device.fiscalDeviceIdentifier` exposes the Shopify-assigned fiscal register identifier for the device (such as Sweden's manufacturing number), so fiscal compliance extensions can stamp receipts and journals without querying the GraphQL Admin API. It's `undefined` when the device's location doesn't require fiscal device registration, and only available on API version `2026-10` and later.
