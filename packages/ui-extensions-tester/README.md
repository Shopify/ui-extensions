# 🧪 @shopify/ui-extensions-tester

Write unit tests for [Shopify UI extensions](../ui-extensions) to ensure correctness and prevent regressions.

This testing library provides strongly typed mocks of the extension API--like the `shopify` global--so you can verify the correctness of your extension without needing a real Shopify host.

## 📋 Requirements

- **API version `2025-10` or later** in your `shopify.extension.toml`
- **Node.js v20.20.0** or later
- **a mock DOM** such as [`environment: 'jsdom'`](https://vitest.dev/config/environment.html) in [`vitest`](https://vitest.dev/)
- **Test isolation** — extensions rely on the `shopify` global, so each test file must run in its own environment. We recommend [`vitest`](https://vitest.dev/) in [isolate mode](https://vitest.dev/config/isolate.html#isolate) (enabled by default).

## 📋 Recommendations

- **TypeScript** — we recommend TypeScript to enforce API compliance against mock objects
- **Node.js ≥ 22.0.0** and **TypeScript ≥ 5.2** — to use ([Explicit Resource Management](https://github.com/tc39/proposal-explicit-resource-management))
- **@testing-library/preact** — if your extension uses [Preact](https://preactjs.com/), we recommend installing [`@testing-library/preact`](https://preactjs.com/guide/v10/preact-testing-library/) for its `fireEvent` and `waitFor` helpers

## 📦 Installation

Install the tester as a dev dependency alongside your preferred test runner:

```bash
npm install --save-dev @shopify/ui-extensions-tester vitest
```

If your extension renders with Preact, also install `@testing-library/preact`:

```bash
npm install --save-dev @testing-library/preact
```

## 🏗️ Adding to an existing extension

If your extension was seeded from an older template using <a href="https://shopify.dev/docs/api/shopify-cli/app/app-generate-extension"><code>shopify app generate extension</code></a>, follow these steps.

<details>
<summary>Expand for details</summary>

The template gives you a project structure like this:

```
my-app/
├── extensions/
│   └── my-extension/
│       ├── src/
│       │   └── Checkout.jsx
│       ├── package.json
│       ├── shopify.d.ts
│       ├── shopify.extension.toml
│       └── tsconfig.json
├── package.json
└── shopify.app.toml
```

You need to add a few things:

### 1. Add dependencies to the root `package.json`

Your extension's own `package.json` (inside `extensions/my-extension/`) already lists `@shopify/ui-extensions` for Shopify CLI. However, tests and typechecking run from the **root** project directory, so you also need `@shopify/ui-extensions` in the root `package.json` — otherwise TypeScript and vitest won't be able to resolve it.

```jsonc
{
  "scripts": {
    // ...existing scripts
    "test": "vitest run",
    "typecheck": "tsc --noEmit --project extensions/my-extension/tsconfig.json"
  },
  "dependencies": {
    "@shopify/ui-extensions": "latest"
  },
  "devDependencies": {
    "@shopify/ui-extensions-tester": "latest",
    "@testing-library/preact": "^3.2.0",
    "typescript": "^5.2.0",
    "vitest": "^3.0.0"
  }
}
```

### 2. Create `vitest.config.ts` at the project root

```ts
import {defineConfig} from 'vitest/config';

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'preact',
  },
  test: {
    environment: 'jsdom',
  },
});
```

### 3. Update the extension's `tsconfig.json`

Add the `tests` directory to the `include` array so your test files are typechecked:

```jsonc
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "preact",
    "target": "ES2020",
    "strict": true,
    "checkJs": true,
    "allowJs": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": [
    "./src",
    "./tests",
    "./shopify.d.ts"
  ]
}
```

### 4. Create a `tests/` directory inside your extension

```
extensions/
└── my-extension/
    ├── src/
    │   └── Checkout.jsx
    └── tests/
        └── Checkout.test.ts   ← your tests go here
```

### 5. Add a triple-slash reference in each test file

Add a [triple-slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) for your target so TypeScript knows about Shopify element types (`s-button`, `s-text`, etc.):

```ts
/// <reference types="@shopify/ui-extensions/purchase.checkout.block.render" />
```

The path must match the target you pass to `getExtension()`.

</details>

## 🏊‍♀️ Getting started

Every test file follows the same pattern:
create an extension harness, set it up before
each test, and tear it down after.

### Quick start with `using` (Node ≥ 22.0.0)

If your runtime supports
[Explicit Resource Management](https://github.com/tc39/proposal-explicit-resource-management),
use `setUpExtension` for zero-boilerplate
setup and automatic teardown:

```ts
import {setUpExtension} from '@shopify/ui-extensions-tester';

test('rendering the extension', async () => {
  using extension = setUpExtension(
    'purchase.checkout.block.render',
  );
  await extension.render();
  // tearDown() is called automatically at the end of the block
});
```

### Classic setup

Alternatively, create the harness once and
manage the lifecycle with `beforeEach` /
`afterEach`:

```ts
import {getExtension} from '@shopify/ui-extensions-tester';
import {beforeEach, afterEach} from 'vitest';

const extension = getExtension(
  'purchase.checkout.block.render',
);

beforeEach(() => {
  extension.setUp();
});

afterEach(() => {
  extension.tearDown();
});
```

`setUp()` creates a complete mock `shopify` global compliant with the target. `tearDown()` clears the DOM and removes the global, among other surface-specific things.

### 🔍 Rendering and querying elements

Call `extension.render()` to import and execute your extension's callback, then query the DOM with standard DOM APIs like [`document.body.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) and [`document.body.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll):

```ts
test('it handles an empty cart', async () => {
  await extension.render();

  const text =
    document.body.querySelector('s-text')!;
  expect(text.textContent).toEqual(
    'No items in cart',
  );
});
```

### 🎨 Mocking shopify API values

The test setup will create a `shopify` global with sensible defaults for the target. You can mutate global property values on `extension.shopify` before rendering.

```ts
test('it handles an empty order', async () => {
  extension.shopify.order.value = undefined;

  await extension.render();

  const text =
    document.body.querySelector('s-text')!;
  expect(text.textContent).toEqual(
    'Order not found',
  );
});
```

### 🖱️ Triggering events

To simulate how a user would interact with your UI extension, you can call [`dispatchEvent()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent) or use `fireEvent` from `@testing-library/preact`. When an event triggers an async state change (like a Preact re-render), wrap follow-up assertions in `await waitFor()` to wait for the DOM to settle:

```ts
import {
  fireEvent,
  waitFor,
} from '@testing-library/preact';

test('it handles date field changes', async () => {
  await extension.render();

  const dateField = document.body.querySelector(
    's-date-field',
  )!;
  dateField.value = '1990-05-20';
  fireEvent.change(dateField);

  const button =
    document.body.querySelector('s-button')!;
  fireEvent.click(button);

  await waitFor(() => {
    const banner =
      document.body.querySelector('s-banner')!;
    expect(banner.textContent).toEqual('Saved');
  });
});
```

### 🔒 Safely mocking mutation functions

When mocking without strict typing, like with [`vitest` mocks](https://vitest.dev/api/vi.html#mocking-functions-and-objects), you can use a surface-specific `createResult()` helper to return type-safe values:

```ts
import {createResult} from '@shopify/ui-extensions-tester/checkout';

const applyMetafieldChange = vi
  .fn()
  .mockResolvedValue(
    createResult('applyMetafieldChange', {
      type: 'error',
      message:
        'Could not apply metafield changes',
    }),
  );
extension.shopify.applyMetafieldChange =
  applyMetafieldChange;
```

The first argument is the mutation API name. The second is an optional result override — omit it to get sensible defaults (like `{type: 'success'}`).

### ⚡ Testing extension code that relies on signals

Extensions typically subscribe to signal-like objects such as [`shopify.lines.value`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/apis/cart-lines#standardapi-propertydetail-lines).
The mock Shopify API **does not implement working signals** so you'll need to test each state change separately.

For example, let's say your extension has a button that updates the quantity of an item in the cart. Test the button first:

```ts
import {createCartLine} from '@shopify/ui-extensions-tester/checkout';

test('increments cart line quantity on click', async () => {
  const line = createCartLine();
  extension.shopify.lines.value = [line];
  const applyCartLinesChange = vi.spyOn(
    extension.shopify,
    'applyCartLinesChange',
  );

  await extension.render();

  const button =
    document.body.querySelector('s-button')!;
  fireEvent.click(button);

  // Make sure clicking the button updates the quantity:
  await waitFor(() => {
    expect(
      applyCartLinesChange,
    ).toHaveBeenCalledWith({
      type: 'updateCartLine',
      id: line.id,
      quantity: line.quantity + 1,
    });
  });
});
```

Next, simulate the state change for updated quantities that would have happened on the checkout host:

```ts
test('it renders the cart line quantity', async () => {
  extension.shopify.lines.value = [
    createCartLine({quantity: 2}),
  ];

  await extension.render();

  const text =
    document.body.querySelector('s-text')!;
  expect(text.textContent).toContain('2');
});
```

### 🌐 Working with translations

The default `shopify.i18n.translate()` mock returns key names as-is to make assertions easier.

For example, if you render `shopify.i18n.translate('headings.orderNotFound')` in extension code, you can test by looking for the rendered key name:

```ts
test('it renders a banner when the order does not exist', async () => {
  extension.shopify.order.value = undefined;

  await extension.render();

  const banner =
    document.body.querySelector('s-banner')!;
  // Check for the translation key, not the actual translation:
  expect(banner.getAttribute('heading')).toEqual(
    'headings.orderNotFound',
  );
});
```

## ☯️ Surface-specific guides

Each surface exports some helpers:

- ⚙️ [Admin](./src/admin/README.md)
- 🛒 [Checkout](./src/checkout/README.md)
- 🛂 [Customer Account](./src/customer-account/README.md)
- 🛍️ [Point of Sale](./src/point-of-sale/README.md)

## 📖 API reference

Exports from `@shopify/ui-extensions-tester`:

### `setUpExtension(target, options?)`

Sets up an extension for testing and returns a
disposable object that supports automatic
teardown with the `using` keyword:

```ts
test('example', async () => {
  using extension = setUpExtension(
    'purchase.checkout.block.render',
  );
  await extension.render();
  // tearDown() called automatically
});
```

It reads `shopify.extension.toml`, finds the module for the given target, and provides helpers to mock the environment and render the extension. It locates `shopify.extension.toml` by walking up from the calling test file's directory, and falls back to searching `extensions/` under the current working directory. Results are cached: calling `getExtension` twice with the same target and the same resolved TOML returns the same instance.

| Option            | Type     | Default                       | Description                                                |
| ----------------- | -------- | ----------------------------- | ---------------------------------------------------------- |
| `configSearchDir` | `string` | calling test file's directory | Directory to start searching for `shopify.extension.toml`. |

By default, it walks up from the test file's directory to find `shopify.extension.toml`.

**Returns** an `Extension` object with the following members:

#### `extension.render()`

Imports and executes the extension module's default export, rendering the extension into `document.body`. Returns a `Promise<void>`.

#### `extension.shopify`

A mock `shopify` global, typed correctly for the target under test. You can mutate any property.

When testing `admin.app.intent.render`, the mock `shopify.intents` object also includes `response.ok()`, `response.error()`, and `response.closed()`.

#### `extension.fetch`

A mock `fetch()` function installed as `globalThis.fetch` during `setUp()` and removed during `tearDown()`.

Override it with a mock to control responses:

```ts
extension.fetch = vi
  .fn()
  .mockResolvedValue(
    new Response(JSON.stringify({ok: true})),
  );
```

Assigning to `extension.fetch` also updates `globalThis.fetch`, so extension code that calls `fetch()` directly will use the mock.

#### `extension.navigation`

A mock [`Navigation`](https://developer.mozilla.org/en-US/docs/Web/API/Navigation) object installed as `globalThis.navigation` during `setUp()` and removed during `tearDown()`. Typed using the `Navigation` interface from `@shopify/ui-extensions/customer-account`.

Override its properties with mocks to control navigation behaviour:

```ts
import {createNavigationHistoryEntry} from '@shopify/ui-extensions-tester';

extension.navigation.navigate = vi.fn();
extension.navigation.currentEntry =
  createNavigationHistoryEntry({
    url: '/cart',
    state: {items: 3},
  });
```

Assigning to `extension.navigation` also updates `globalThis.navigation`, so extension code that calls `navigation.navigate()` directly will use the mock.

### `getExtension(target, options?)`

> ⚠️ Prefer [`setUpExtension`](#setupextensiontarget-options) on Node ≥ 22.0.0. Use `getExtension` only if your runtime does not support [Explicit Resource Management](https://github.com/tc39/proposal-explicit-resource-management).

Accepts the same arguments as `setUpExtension`. You must call `extension.setUp()` and `extension.tearDown()` explicitly.

**Returns** an `Extension` object with the following additional members:

#### `extension.setUp()`

Sets up an extension environment for testing. Creates a mock `shopify` global with some defaults.

#### `extension.tearDown()`

Tears down the extension environment. Resets the `shopify` global and clears `document.body`.

### `createNavigationHistoryEntry(options?)`

Creates a [`NavigationHistoryEntry`](https://developer.mozilla.org/en-US/docs/Web/API/NavigationHistoryEntry) for mocking `navigation.currentEntry` or other navigation values.

- `url` — URL of the history entry (default `''`)
- `key` — key of the history entry (default `''`)
- `state` — developer-defined state retrieved via `getState()` (default `undefined`). Each `getState()` call returns a structured clone, matching real browser behaviour.
