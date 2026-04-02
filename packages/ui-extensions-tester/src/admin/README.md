# ⚙️ Admin helpers

Surface-specific helpers for testing admin UI extensions. Import from `@shopify/ui-extensions-tester/admin`.

These helpers also support app-level admin targets such as `admin.app.intent.render`.

```ts
import {
  createStorage,
  createResult,
} from '@shopify/ui-extensions-tester/admin';
```

## 💾 Mocking storage

Admin extensions use a key-value `Storage` API. Create a mock with initial values:

```ts
import {createStorage} from '@shopify/ui-extensions-tester/admin';

extension.shopify.storage = createStorage({
  'my-setting': 'saved-value',
});
```

## 🧭 App intent mocks

The `admin.app.intent.render` target mock includes `shopify.intents.response.ok()`, `.error()`, and `.closed()`.

## 🔒 Mocking mutation return values

Replace mutation functions with `vi.fn()` and use `createResult()` to build typed return values. The first argument is the mutation name; the second is an optional result override.

```ts
import {createResult} from '@shopify/ui-extensions-tester/admin';

const applyMetafieldChange = vi
  .fn()
  .mockResolvedValue(
    createResult('applyMetafieldChange'),
  );
extension.shopify.applyMetafieldChange =
  applyMetafieldChange;
```

For discount function settings targets:

```ts
import {createResult} from '@shopify/ui-extensions-tester/admin';

extension.shopify.applyMetafieldChange = vi
  .fn()
  .mockResolvedValue(
    createResult('applyMetafieldChange'),
  );

extension.shopify.discounts.updateDiscountClasses =
  vi
    .fn()
    .mockReturnValue(
      createResult('updateDiscountClasses'),
    );
```

## 📂 Example

See the [admin example](../../../../examples/testing/admin-testing-example) for a fully working extension with a test suite.

## 📖 API reference

### `createStorage(initialEntries?)`

Creates a mock `Storage` instance. Optionally accepts a `Record<string, unknown>` of initial entries.

### `createResult(mutation, result?)`

Creates a typed mock result for an admin mutation API.

Supported mutations:

| Mutation                  | Default                      |
| ------------------------- | ---------------------------- |
| `'applyMetafieldChange'`  | `{type: 'success'}`          |
| `'updateDiscountClasses'` | `{success: true, value: []}` |
