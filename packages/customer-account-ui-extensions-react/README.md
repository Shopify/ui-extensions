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
