# 🛂 Customer Account helpers

Surface-specific helpers for testing customer account UI extensions. Import from `@shopify/ui-extensions-tester/customer-account`.

```ts
import {
  createCartLine,
  createStorage,
  createResult,
} from '@shopify/ui-extensions-tester/customer-account';
```

## 🛒 Mocking cart lines

Use `createCartLine()` to build order line item data for order status targets:

```ts
import {createCartLine} from '@shopify/ui-extensions-tester/customer-account';

extension.shopify.lines.value = [
  createCartLine({quantity: 3}),
  createCartLine({
    id: 'gid://shopify/CartLine/2',
    merchandise: {
      type: 'variant',
      id: 'gid://shopify/ProductVariant/7',
      title: 'Blue Shirt',
      selectedOptions: [],
      product: {
        id: 'gid://shopify/Product/3',
        vendor: 'Apparel Co',
        productType: 'shirt',
      },
      requiresShipping: true,
    },
  }),
];
```

## 💾 Mocking storage

```ts
import {createStorage} from '@shopify/ui-extensions-tester/customer-account';

extension.shopify.storage = createStorage({
  alreadyRequestedReturn: true,
});
```

## 🔒 Mocking mutation return values

```ts
import {createResult} from '@shopify/ui-extensions-tester/customer-account';

extension.shopify.applyTrackingConsentChange = vi
  .fn()
  .mockResolvedValue(
    createResult('applyTrackingConsentChange', {
      type: 'success',
    }),
  );
```

## 📂 Example

See the [customer account example](../../../../examples/testing/customer-account-testing-example) for a fully working extension with a test suite.

## 📖 API reference

### `createCartLine(overrides?)`

Creates a mock `CartLine` with sensible defaults. Pass a partial override to customize any field.

### `createStorage(initialEntries?)`

Creates a mock `Storage` instance. Optionally accepts a `Record<string, unknown>` of initial entries.

### `createResult(mutation, result?)`

Creates a typed mock result for a customer account mutation API. The `mutation` argument is strongly typed to only accept known mutation names.

Supported mutations:

| Mutation                       | Default             |
| ------------------------------ | ------------------- |
| `'applyTrackingConsentChange'` | `{type: 'success'}` |
