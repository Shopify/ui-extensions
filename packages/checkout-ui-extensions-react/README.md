# `@shopify/checkout-ui-extensions-react`

This library provides utilities for writing checkout UI extensions using [React](https://reactjs.org).

## Installation

```bash
$ yarn add @shopify/checkout-ui-extensions-react
```

## Usage

All [UI rendering capabilities](../checkout-ui-extensions/documentation/rendering.md) are built on top of a library called [remote-ui](https://github.com/Shopify/remote-ui). One of the powerful aspects of remote-ui is that it can be the target for JavaScript libraries that support custom (non-DOM) rendering. [React](https://reactjs.org) is one such library, and remote-ui provides a [custom renderer for React](https://github.com/Shopify/remote-ui/tree/main/packages/react) that allows you to use all the power of React, while outputting UI mutations that remote-ui can understand.

`@shopify/checkout-ui-extensions-react` provides a few additional utilities if you are writing a UI extension in React (it also re-exports all the relevant values from [`@shopify/checkout-ui-extensions`](../checkout-ui-extensions)). Before you start down this path, though, make sure you are working on an extension that will be complex enough to warrant the additional bundle size of including React. The [core API of remote-ui](https://github.com/Shopify/remote-ui/tree/main/packages/core) is built to be usable directly, and remote-ui provides other bindings, like [this one to `htm`](https://github.com/Shopify/remote-ui/tree/main/packages/htm), that provide some of the ergonomics of React without so much overhead.

To use the React bindings in a UI extension, start by importing `React` as you normally would. All of the [core features of React](https://reactjs.org/docs/getting-started.html) are available, including hooks, context, and more.

You’ll then import `render` from `@shopify/checkout-ui-extensions-react`. This function is a [thing wrapper](./src/render.ts) around [`shopify.extend`](../checkout-ui-extensions/documentation/globals.md) and [`@remote-ui/react`’s `render()`](https://github.com/Shopify/remote-ui/tree/main/packages/react#render). You’ll pass this function the name of an extension that can render UI, and a function that should return the JSX to render when that extension point is run. This function receives the input argument for the extension point.

```tsx
import {render} from '@shopify/checkout-ui-extensions-react';

// `extensionPoint` is part of the [standard API](../checkout-ui-extensions/src/extension-points/api/standard)
render('Checkout::PostPurchase::Render', ({extensionPoint}) => (
  <App extensionPoint={extensionPoint} />
));

interface Props {
  extensionPoint: string;
}

function App({extensionPoint}: Props) {
  return <>Extension point: {extensionPoint}</>;
}
```

If you’ve ever used React on the web, you’re probably used to returning DOM nodes as part of your React components. Because UI extensions execute in a web worker and have no access to the DOM, returning DOM components is an error in UI extensions. Instead, you can return the components you import from `@shopify/checkout-ui-extensions-react`, which are the equivalent of the DOM in checkout — they are the “leaf” elements, the lowest-level UI primitives that exist.

```tsx
import {render, Button} from '@shopify/checkout-ui-extensions-react';

render('Checkout::PostPurchase::Render', (props) => <App {...props} />);

interface Props {
  extensionPoint: string;
}

function App({extensionPoint}: Props) {
  return (
    <Button
      onPress={() => {
        console.log(`Extension point: ${extensionPoint}`);
      }}
    >
      Log extension point to console
    </Button>
  );
}
```

## Other React-specific APIs

### `useExtensionApi()`

`useExtensionApi` is a [custom React hook](https://reactjs.org/docs/hooks-intro.html) that gives you access to the full input argument provided to your extension point (this is the value that, if you were registering an extension point directly with [`shopify.extend`](../checkout-ui-extensions/documentation/globals.md), would be passed as the second argument to your callback). This allows you to access and call the main APIs between your extension and Shopify anywhere in your React component.

If you are using TypeScript, you can supply the name of the extension point as a type parameter to this function. Doing so will refine the return type to be exactly the input type for that extension point, so make sure you pass the name of the extension you are actually rendering.

```tsx
import {
  render,
  useExtensionApi,
  Button,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
  const {extensionPoint} = useExtensionApi<'Checkout::PostPurchase::Render'>();

  return (
    <Button
      onPress={() => {
        console.log(`Extension point: ${extensionPoint}`);
      }}
    >
      Log extension point to console
    </Button>
  );
}
```

This hook can only be called if you registered your extension with `render`, as that callback wraps the application in the necessary React context to make the input available anywhere in the tree.
