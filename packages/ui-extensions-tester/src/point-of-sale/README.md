# 🛍️ Point of Sale helpers

Surface-specific helpers for testing point of sale (POS) UI extensions. Import from `@shopify/ui-extensions-tester/point-of-sale`.

```ts
import {
  createCartLineItem,
  createStorage,
  createResult,
} from '@shopify/ui-extensions-tester/point-of-sale';
```

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

## 🔒 Mocking mutation return values

Replace mutation functions with `vi.fn()` and use `createResult()` to build typed return values. The first argument is the mutation name; the second is an optional result override.

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

## 🚦 Testing interceptors

Register an interceptor via `shopify.intercept()` in your extension, then use `extension.fireIntercept()` to run it and assert on the returned operations. Build event payloads with the event data factories:

```ts
import {createCartValidationsEventData} from '@shopify/ui-extensions-tester/point-of-sale';

await extension.render();

const result = extension.fireIntercept(
  'cartvalidations',
  createCartValidationsEventData(),
);

expect(
  result?.operations[0]?.validationAdd?.level,
).toBe('ERROR');
```

Interceptors follow the host contract: one interceptor per event, synchronous only (returning a Promise throws), and `fireIntercept()` returns `undefined` when nothing is registered.

## 🧾 Mocking resolution event data

The same factories provide the `shopify.resolution.event` value on resolution targets:

```ts
import {createPaymentValidationsEventData} from '@shopify/ui-extensions-tester/point-of-sale';

extension.shopify.resolution.event.value =
  createPaymentValidationsEventData({
    amount: {
      amount: '150.00',
      currencyCode: 'CAD',
    },
  });
```

## 📂 Example

See the [point of sale example](../../../../examples/testing/point-of-sale-testing-example) for a fully working extension with a test suite.

## 📖 API reference

### `createCartLineItem(overrides?)`

Creates a mock POS `LineItem` with sensible defaults. Pass a partial override to customize fields.

### `createStorage(initialValues?)`

Creates a mock `Storage` instance. Optionally accepts a `Record<string, unknown>` of initial entries.

### `createPosCart(overrides?)`

Creates a mock POS `Cart` with empty, zero-total defaults. Pass a partial override to customize fields.

### `createCartValidationsEventData(overrides?)`

Creates mock `cartvalidations` event data (`{cart}`): the payload for `extension.fireIntercept()` and the `shopify.resolution.event` value on the cart resolution target.

### `createPaymentValidationsEventData(overrides?)`

Creates mock `paymentvalidations` event data (`{paymentMethod, amount}`) with cash defaults: the payload for `extension.fireIntercept()` and the `shopify.resolution.event` value on the payment resolution target.

### `createResult(mutation, result?)`

Creates a typed mock result for a POS mutation API. The `mutation` argument is strongly typed to only accept known mutation names.

Supported mutations:

| Mutation           | Default                     |
| ------------------ | --------------------------- |
| `'bulkCartUpdate'` | Empty cart with zero totals |
