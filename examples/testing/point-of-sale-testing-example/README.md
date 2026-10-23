This extension was created with:

```
shopify app init --name point-of-sale-testing-example
cd point-of-sale-testing-example
shopify app generate extension
# I chose 'POS block'
```

See it in action:

Build the root package:

```
yarn build
```

Change into this example package and run:

```
npm install
npm run typecheck
npm test
```

## Checkout blocking setup in an existing tile and modal

This example demonstrates adding permission readers and onboarding to the existing tile and home modal of an extension whose workflow requires checkout blocking. Both targets belong to one `[[extensions]]` registration in `shopify.extension.toml`. Reading `shopify.capabilities` requires no separate extension, intercept declaration, or `runs_offline` setting.

To let a merchant grant checkout blocking, the same extension registration must already have an eligible active blocking intercept. POS Editor only offers **Allow app to block checkout** when that prerequisite is met. Adapt these readers to that existing registration; the companion tile and modal do not need their own intercept declarations.

The standalone fixture in this directory declares only tile and modal targets. Its tests model synchronized permission values, but the fixture cannot complete the real granting flow by itself. Only show this onboarding when your app actually needs checkout blocking. A disabled grant is expected for an ordinary tile/modal extension that does not need to block checkout.

Both targets feature-detect the API for older POS versions. The shared `useCapabilities` hook subscribes to updates, reads again after subscribing to cover changes during rendering, and unsubscribes on unmount. Unknown or unavailable state (`undefined`) leaves the regular cart UI visible. Only a known array without `block_progress` shows onboarding. `['block_progress']` hides the prompt.

The value reflects settings last synchronized to this POS device. An offline device can retain an earlier value. The signal reports only the merchant's permission for this extension registration; it does not indicate that an interceptor is registered, configured to block, eligible to run, or guaranteed to block a checkout action. Deactivation clears the merchant grant; reactivation requires the merchant to enable blocking again.

`Capabilities.test.ts` exercises unknown and unsupported APIs, disabled and enabled settings, hydration and live changes, and subscription cleanup on both targets. These are mock integration tests; they do not verify synchronization or checkout enforcement on a POS device.

The capability API is proposed on the `2026-10-rc` feature branch. Using it on a device requires a POS build with the companion runtime implementation. Final API version, TAG approval, and package publication remain prerequisites for release.
