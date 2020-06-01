# `@shopify/argo-checkout`

This library contains type definitions and other utilities for writing Argo extensions in Shopify’s checkout.

## Before you begin

The first thing to understand is that nothing in this library is strictly required. The functions and types exported from it are provided to make it easier to see the types of the components, inputs, and outputs included in Argo. An "Argo script" can forego these utilities entirely if it so chooses, and instead use the global `self.shopify` API directly:

```js
self.shopify.extend(
  'Checkout::PostPurchaseCrossSell::Render',
  (root, input) => {
    const button = root.createComponent('Button', {
      onPress() {
        console.log('Upsold!');
        input.done();
      },
    });

    button.appendChild('Buy now');

    root.appendChild(button);
    root.mount();
  },
);
```

## Usage

The main function this library exports is called `extend`. It’s actually just an alias for `self.shopify.extend`, but provides the type definitions to let you know what arguments an extension point receives.

```ts
import {extend} from '@shopify/argo-checkout';

extend('Checkout::PostPurchaseCrossSell::Render', (input) => {
  /* your extension goes here */
});
```

Most extensions render UI. These extensions are called with a remote "root" to which you can append representations of the UI you want to render. Extensions can only render components explicitly provided by Shopify, and those components have a carefully designed "props" API that allows you to configure their behavior. This package also exports these components and their types, so you can know you are rendering an accepted component (and get good editor autocompletion for its available properties!) when you import them from this package.

```ts
import {extend, Button} from '@shopify/argo-checkout';

extend('Checkout::PostPurchaseCrossSell::Render', (root, {done}) => {
  const button = root.createComponent(Button, {
    // If I had misspelled (like calling this `onpress()`), my editor
    // would warn me of the invalid property.
    onPress() {
      console.log('Upsold!);
      done();
    }
  });

  // Type `button.` or `root.` in an editor like VSCode, and you will see
  // the methods and properties available through the API
  button.appendChild('Buy now');
  root.appendChild(button);
  root.mount();
});
```

## Organization

There are a few logical groupings of utilities provided by this package:

- **The type of `self.shopify`**. This global is the only way for extensions to interact with Shopify when running as an Argo script. The source of truth for this type is in [/globals.ts](src/globals.ts) — the rest of this library references this type when interacting with the global, and Checkout consumes this library to ensure it supplies a `self.shopify` to the extension that satisfies the API.
- **Component definitions**. Component definitions provide the types of properties available for the component, and the component’s unique name. These component definitions are exported from the [`/components` directory](src/components). At runtime, these components are just strings: that is, `import {Button} from '@shopify/argo-checkout'` is equivalent to `const Button = 'Button'`, but with strong types attached. One component is defined per file so that build tools have an easier time tree-shaking unused components (strings add up!).
- **Extension point definitions**. The main way a consumer will use `self.shopify` is by calling `self.shopify.extend()`, which registers a function the extension wants to run against a named "extension point". The names of the extension points, and the functions they accept, are centralized in [`/extension-points/extension-points.ts`](src/extension-points/extension-points.ts). The most common type of extension, one that renders UI, is intended to always have the same signature — a function that accepts a remote "root" to which it can attach UI, and a second argument that includes all the API specific to that extension point. Additional types for standardizing those "render extensions" is available in [`/extension-points/render-extension.ts`](src/extension-points/render-extension.ts). Because the types of the API for individual extension points can be fairly large (where there are deeply nested objects), those types are stored in dedicated files under the [`/extension-points/input` directory](src/extension-points/input).
- **React integration**. This library also exports a few small utilities for making it more ergonomic to use React in an extension. The key utility is [`renderReact()`](src/api/react/render.ts), which uses the same `self.shopify.extend()` API noted above to register a React component for an extension point. It also exposes [`useExtensionInput()`](src/api/react/hooks.ts), which allows the React app to access the API argument of an extension from anywhere in their app. These utilities are entirely removed from the resulting script when an extension does not use them.
