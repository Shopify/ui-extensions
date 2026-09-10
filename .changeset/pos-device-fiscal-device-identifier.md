---
'@shopify/ui-extensions': minor
---

Add `fiscalDeviceIdentifier` to the POS Device API. `shopify.device.fiscalDeviceIdentifier` is the Shopify-assigned fiscal register identifier for the device (such as Sweden's manufacturing number), matching the `fiscalDeviceIdentifier` field on the `PointOfSaleDevice` object in the GraphQL Admin API. It's `undefined` when the device's location doesn't require fiscal device registration.
