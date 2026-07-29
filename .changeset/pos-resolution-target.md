---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-tester': minor
---

Add the `pos.resolution.action.render` extension target for POS. This target renders a resolution side panel beside the cart when a `beforeCheckout` intercept returns a blocking validation. The target's API includes the standard API, a write-capable live Cart API, and read-only navigation (`currentEntry` only — `navigate`/`back` throw host-side). The app identifies which validation to resolve by reading the handle from the seeded navigation URL (`navigation.currentEntry.url`), and re-runs its own interceptor validation function against the live `cart.current` to regenerate the violation details.
