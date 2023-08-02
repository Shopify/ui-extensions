# Customer Account UI Extensions (React)

This library provides utilities for writing Customer Account UI extensions using [React](https://reactjs.org).

## Installation

```bash
$ yarn add @shopify/customer-account-ui-extensions-react
```

## Usage

To use the React bindings in a UI extension, start by importing `React` as you normally would. All of the [core features of React](https://reactjs.org/docs/getting-started.html) are available, including hooks, context, and more.

```tsx
import {Button, render} from '@shopify/customer-account-ui-extensions-react';

render('CustomerAccount::FullPage::RenderWithin', () => <App />);

interface Props {}

function App(_: Props) {
  return (
    <Button
      onPress={() => {
        console.log('Pressed');
      }}
    >
      Press me
    </Button>
  );
}
```

If you’ve ever used React on the web, you’re probably used to returning DOM nodes as part of your React components. Because UI extensions execute in a web worker and have no access to the DOM, returning DOM components is an error in UI extensions. Instead, you can return the components you import from `@shopify/customer-account-ui-extensions-react`, which are the equivalent of the DOM in Customer Account — they are the “leaf” elements, the lowest-level UI primitives that exist.

For example, the following will throw an error:

```tsx
import {render} from '@shopify/customer-account-ui-extensions-react';

render('CustomerAccount::FullPage::RenderWithin', () => <App />);

interface Props {}

function App(_: Props) {
  return <div>No HTML tag allowed</div>;
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
} from '@shopify/customer-account-ui-extensions-react';

render("CustomerAccount::FullPage::RenderWithin", () => <App />);

function App() {
  const {extension, features, i18n} = useExtensionApi();

  return (
    <Button
      onPress={() => {
        console.log({extension, features, i18n});
      }}
    >
      Log extension API to console
    </Button>
  );
}
```

This hook can only be called if you registered your extension with `render`, as that callback wraps the application in the necessary React context to make the input available anywhere in the tree.
