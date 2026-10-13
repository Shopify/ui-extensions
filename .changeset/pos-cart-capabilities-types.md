---
'@shopify/ui-extensions': minor
---

Add optional `capabilities` to the POS `Cart` so extensions can check whether each Cart API method is currently available before calling it. `cart.capabilities` maps every existing Cart API method (`CartCapabilityMethod`) to a `CartMethodCapability`: either `{isAvailable: true}` or `{isAvailable: false, reason}` with a `CartCapabilityReason`. The new `CartCapabilities`, `CartCapabilityMethod`, `CartMethodCapability` and `CartCapabilityReason` types are exported from `@shopify/ui-extensions/point-of-sale`.

`capabilities` is present only on supported current-cart views for apps enrolled in the returns and exchanges pilot. It's absent on other cart snapshots, such as event snapshots and carts from older POS versions, so check that it's present before reading a method's availability. A missing `capabilities` property doesn't mean that a method is available. Availability describes the cart, not the extension target, and doesn't validate the arguments of a call.

`Cart.editable` is deprecated in favor of `cartType` and `capabilities` when they're available. It keeps its existing meaning and its fallback, including `undefined` meaning `true` on older checkout snapshots. In the pilot it's `true` for `'Checkout'` carts and `false` for `'Return'`, `'Exchange'` and `'Unsupported'` carts.
