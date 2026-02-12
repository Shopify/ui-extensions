# 🛒 Checkout helpers

Surface-specific helpers for testing checkout UI extensions. Import from `@shopify/ui-extensions-tester/checkout`.

```ts
import {
  createCartLine,
  createResult,
} from '@shopify/ui-extensions-tester/checkout';
```

## 🧩 Mocking cart lines

Use `createCartLine()` to build realistic cart line data with sensible defaults, then assign it to the mock:

```ts
import {createCartLine} from '@shopify/ui-extensions-tester/checkout';

extension.shopify.lines.value = [
  createCartLine({quantity: 2}),
  createCartLine({
    id: 'gid://shopify/CartLine/2',
    merchandise: {
      type: 'variant',
      id: 'gid://shopify/ProductVariant/99',
      title: 'Large Widget',
      selectedOptions: [],
      product: {
        id: 'gid://shopify/Product/42',
        vendor: 'Acme',
        productType: 'widget',
      },
      requiresShipping: true,
    },
  }),
];
```

## 📦 Mocking shipping options

```ts
import {createShippingOption} from '@shopify/ui-extensions-tester/checkout';

extension.shopify.target.value =
  createShippingOption({
    title: 'Express Shipping',
    cost: {amount: 15, currencyCode: 'USD'},
  });
```

## 📍 Mocking pickup locations

```ts
import {
  createPickupLocationOption,
  createPickupLocation,
} from '@shopify/ui-extensions-tester/checkout';

extension.shopify.target.value =
  createPickupLocationOption({
    location: createPickupLocation({
      name: 'Downtown Store',
    }),
  });
```

## 💾 Mocking storage

```ts
import {createStorage} from '@shopify/ui-extensions-tester/checkout';

extension.shopify.storage = createStorage({
  acceptedTerms: true,
});
```

## 🔒 Mocking mutation return values

Replace any mutation function with a `vi.fn()` and use `createResult()` to build a typed return value. The first argument is the mutation API name; the second is an optional result override (defaults to `{type: 'success'}`).

```ts
import {createResult} from '@shopify/ui-extensions-tester/checkout';

const applyCartLinesChange = vi
  .fn()
  .mockResolvedValue(
    createResult('applyCartLinesChange', {
      type: 'success',
    }),
  );
extension.shopify.applyCartLinesChange =
  applyCartLinesChange;
```

To simulate an error:

```ts
import {createResult} from '@shopify/ui-extensions-tester/checkout';

const applyCartLinesChange = vi
  .fn()
  .mockResolvedValue(
    createResult('applyCartLinesChange', {
      type: 'error',
      message: 'Out of stock',
    }),
  );
```

## 📂 Example

See the [checkout example](../../../../examples/testing/checkout-basic-testing-example) for a fully working extension with a test suite.

## 📖 API reference

### `createCartLine(overrides?)`

Creates a mock `CartLine` with sensible defaults. Pass a partial override to customize any field.

### `createShippingOption(overrides?)`

Creates a mock `ShippingOption` with sensible defaults.

### `createPickupLocation(overrides?)`

Creates a mock pickup `Location` object with sensible defaults.

### `createPickupLocationOption(overrides?)`

Creates a mock `PickupLocationOption` with sensible defaults.

### `createStorage(initialEntries?)`

Creates a mock `Storage` instance. Optionally accepts a `Record<string, unknown>` of initial entries.

### `createResult(mutation, result?)`

Creates a typed mock result for a checkout mutation API. The `mutation` argument is strongly typed to only accept known mutation names. The return type matches the result type of the given mutation.

Supported mutations:

| Mutation                               | Default             |
| -------------------------------------- | ------------------- |
| `'applyAttributeChange'`               | `{type: 'success'}` |
| `'applyCartLinesChange'`               | `{type: 'success'}` |
| `'applyDiscountCodeChange'`            | `{type: 'success'}` |
| `'applyGiftCardChange'`                | `{type: 'success'}` |
| `'applyMetafieldChange'`               | `{type: 'success'}` |
| `'applyNoteChange'`                    | `{type: 'success'}` |
| `'applyTrackingConsentChange'`         | `{type: 'success'}` |
| `'applyPaymentMethodAttributesChange'` | `{type: 'success'}` |
| `'applyRedeemableChange'`              | `{type: 'success'}` |
