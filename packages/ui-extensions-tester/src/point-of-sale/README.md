# 🛍️ Point of Sale helpers

Surface-specific helpers for testing point of sale (POS) UI extensions. Import from `@shopify/ui-extensions-tester/point-of-sale`.

```ts
import {
  createCartLineItem,
  createStorage,
  createResult,
} from '@shopify/ui-extensions-tester/point-of-sale';
```

## Mocking session data

For targets using the Session API in 2026-10, the mock exposes `session.staffMember.value` with a default of `{id: 1}`. Set `extension.shopify.session.staffMember.value` before rendering to test a different pinned-in staff member, or set it to `undefined` to test when no staff member is pinned in.

`session.currentSession.staffMemberId` is no longer exposed. Receipt header and footer targets retain their separate `session.staffMemberId` snapshot, which defaults to `1`.

## 🛒 Mocking cart line items

Use `createCartLineItem()` to build POS cart line data, then assign it to the cart mock:

```ts
import {createCartLineItem} from '@shopify/ui-extensions-tester/point-of-sale';

extension.shopify.cart.current.value.lineItems = [
  createCartLineItem({
    title: 'Widget',
    quantity: 3,
  }),
  createCartLineItem({
    title: 'Gadget',
    quantity: 1,
  }),
];

await extension.render();

const tile =
  document.body.querySelector('s-tile')!;
expect(tile.getAttribute('subheading')).toEqual(
  '4 item(s)',
);
```

## 💾 Mocking storage

POS storage is a typed key-value store:

```ts
import {createStorage} from '@shopify/ui-extensions-tester/point-of-sale';

extension.shopify.storage = createStorage({
  'last-synced': '2026-01-01',
});
```

The mock is a stateful in-memory store, but it doesn't enforce the documented POS storage limits and never throws `StorageError`. If your extension handles quota errors, replace `extension.shopify.storage.set` with your own mock to exercise that path.

## 🔒 Mocking cart mutations

The target API mock includes asynchronous stubs for Cart API mutations, including `updateLineItemQuantity`. Replace a stub with a spy when you need to verify a call:

```ts
const updateLineItemQuantity = vi.spyOn(
  extension.shopify.cart,
  'updateLineItemQuantity',
);

await extension.shopify.cart.updateLineItemQuantity(
  'line-item-uuid',
  2,
);

expect(
  updateLineItemQuantity,
).toHaveBeenCalledWith('line-item-uuid', 2);
```

For mutations that return data, replace the function with `vi.fn()` and use `createResult()` to build typed return values. The first argument is the mutation name; the second is an optional result override.

```ts
import {
  createResult,
  createCartLineItem,
} from '@shopify/ui-extensions-tester/point-of-sale';

extension.shopify.cart.bulkCartUpdate = vi
  .fn()
  .mockResolvedValue(
    createResult('bulkCartUpdate', {
      subtotal: '10.00',
      taxTotal: '1.00',
      grandTotal: '11.00',
      cartDiscounts: [],
      lineItems: [
        createCartLineItem({title: 'Widget'}),
      ],
      properties: {},
    }),
  );
```

## Simulating POS host events

In the POS app, host events (`transactioncomplete`, `cashtrackingsessionstart`, `cashtrackingsessioncomplete`, `scan`) are delivered only to the background target, `pos.app.ready.data`, through `shopify.addEventListener`. Render targets don't have these listener globals in production. The tester attaches them to every POS target mock, so a test can't catch accidental listener registration from a render target — only register listeners in background-target code.

Your extension registers its listener when it runs; your test then fires the event with `extension.dispatch()`. For example, a background extension that stores completed sale order IDs under `last-sale-order-id` can be tested as follows:

```ts
import {getExtension} from '@shopify/ui-extensions-tester';

const extension = getExtension(
  'pos.app.ready.data',
);

test('it reacts to completed sales', async () => {
  extension.setUp();
  try {
    await extension.render();

    extension.dispatch('transactioncomplete', {
      transactionType: 'Sale',
      orderId: 1,
      discounts: [],
      taxTotal: {amount: 0, currency: 'USD'},
      subtotal: {amount: 0, currency: 'USD'},
      grandTotal: {amount: 0, currency: 'USD'},
      paymentMethods: [],
      balanceDue: {amount: 0, currency: 'USD'},
      shippingLines: [],
      taxLines: [],
      executedAt: '2026-09-18T00:00:00Z',
      lineItems: [],
    });

    await vi.waitFor(async () => {
      expect(
        await extension.shopify.storage.get(
          'last-sale-order-id',
        ),
      ).toBe(1);
    });
  } finally {
    extension.tearDown();
  }
});
```

The payload you pass omits `type`; listeners receive the event with a `type` field matching the event name added, as the host does. This describes the `2026-10` tester; the published `2026.7.4` tester passes the supplied payload through unchanged. Use the documentation matching your installed tester version. Listener return values are ignored, and a throwing listener doesn't prevent the remaining listeners from running.

## Static signal mocks

Signal-like values on the mock — `cart.current`, `connectivity.current`, `locale.current`, `session.staffMember`, and the scanner signals — are static snapshots. Unlike the real POS signals, `subscribe()` never invokes the registered callback and doesn't replay the current value. Test each state as a separate render by assigning the value before `render()`:

```ts
extension.shopify.cart.current.value.lineItems = [
  createCartLineItem({title: 'Widget'}),
];
await extension.render();
```

## Stubbed and stateful mocks

Most POS APIs on the mock `shopify` object are static stubs: they return fixed values and cause no side effects. Any stub can be replaced — assign your own function (for example a `vi.fn()`) to the corresponding property of `extension.shopify`.

| API                                                                                | Mock behavior                                                                                                                                             |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cart` mutations (`applyCartDiscount`, `addLineItem`, `updateLineItemQuantity`, …) | Async no-ops. `bulkCartUpdate` resolves an empty-cart result; `addCustomSale` and `addLineItem` resolve `''`. None of them change `cart.current`.         |
| `action.presentModal`                                                              | No-op.                                                                                                                                                    |
| `toast.show`                                                                       | No-op.                                                                                                                                                    |
| `pinPad.showPinPad`                                                                | No-op; the PIN-entry callback is never invoked.                                                                                                           |
| `camera.takePhoto`                                                                 | Resolves a zero-size `image/jpeg` result.                                                                                                                 |
| `print.print`, `printing`                                                          | `printing.getPrinters()` resolves `[]`; print calls resolve without printing.                                                                             |
| `session.getSessionToken`                                                          | Resolves `'mock-session-token'`.                                                                                                                          |
| `productSearch.*`                                                                  | Searches resolve empty results; single-item fetches resolve `undefined`.                                                                                  |
| `scanner`                                                                          | `showCameraScanner`/`hideCameraScanner` are no-ops; `scannerData.current` and `sources.current` are static signal-likes.                                  |
| `device.getDeviceId`, `device.isTablet`                                            | Resolve `'mock-device-id'` and `false`.                                                                                                                   |
| `cashDrawer.open`                                                                  | Async no-op.                                                                                                                                              |
| `storage`                                                                          | Stateful in-memory store; doesn't enforce storage limits (see above).                                                                                     |
| `i18n.translate`                                                                   | Returns the translation key as-is.                                                                                                                        |
| `fetch` (global)                                                                   | Resolves an empty `200` `Response` for any request. The `network_access`/`api_access` capability check is checkout-only and isn't applied to POS targets. |

The shared navigation mock (`extension.navigation`, also installed as `globalThis.navigation`) follows the customer-account `Navigation` interface rather than the POS one: it has no `back()` method and `navigate()` doesn't return a promise. If your POS code calls `navigation.back()`, add that method to a replacement mock before rendering:

```ts
const navigation = {
  ...extension.navigation,
  back: vi.fn(),
};
extension.navigation = navigation;
```

## Simulation scope

Tests run in a mock DOM (for example jsdom), not in the POS app. DOM APIs and `dispatchEvent`/`fireEvent` simulate user interaction with the rendered component tree only — no native POS behavior is exercised. In particular, dismissing UI in a test (for example with a DOM `window.close()`) does not establish that a native POS modal closes; native window, modal, and hardware behavior is outside the tester's simulation.

## 📂 Example

See the [point of sale example](../../../../examples/testing/point-of-sale-testing-example) for a fully working extension with a test suite.

## 📖 API reference

### `createCartLineItem(overrides?)`

Creates a mock POS `LineItem` with sensible defaults. Pass a partial override to customize fields.

### `createStorage(initialValues?)`

Creates a mock `Storage` instance. Optionally accepts a `Record<string, unknown>` of initial entries.

### `createResult(mutation, result?)`

Creates a typed mock result for a POS mutation API. The `mutation` argument is strongly typed to only accept known mutation names.

Supported mutations:

| Mutation           | Default                     |
| ------------------ | --------------------------- |
| `'bulkCartUpdate'` | Empty cart with zero totals |
