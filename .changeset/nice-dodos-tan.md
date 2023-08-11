---
'@shopify/ui-extensions': patch
'@shopify/ui-extensions-react': patch
---

PickupLocationsApi and PickupPointsApi now return a `isLocationFormVisible` property as opposed to `locationFormVisible`. ShippingMethodDetailsApi now gurantees a target (`ShippingOption`) will be returned.
