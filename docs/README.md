# Client Side Documentation

## Contents

- [Extension Points](./ExtensionPoints/README.md)
- [Components](./Components/README.md)
- [Utilities](./Utilities/README.md)

## Getting Started

### 1. Install the Shopify CLI

Follow the instructions to install the app Shopify CLI [here](https://shopify.github.io/shopify-app-cli/getting-started/install/)

### 2. Create an extension

Run `shopify create extension` to get started.
This command will clone an extension template, which contains a basic extension.

### 3. Run the local server

Run `shopify serve` and start coding! All the code you will write for your extension should be within the `src` folder using the index entry point generated. This ensures that the CLI will know what to bundle when pushing your extension to shopify.

## Render API

The `extend` method provided by Argo add your script to an area of Shopify and can be rendered similar to `ReactDOM.render`. The `render` method helps you render React code.

```js
extend(ExtensionPoint, renderCallback);

// or JSX
extend(
  ExtensionPoint,
  render(() => <App />),
);
```

#### Arguments

- `ExtensionPoint`: Where in the Shopify Admin the extension should render. Import this enum from Argo.
- `renderCallback`: A method that returns Argo components to be rendered.

#### Vanilla Example

```js
import {extend, ExtensionPoint, Text} from '@shopify/argo-admin';

extend('App', (root) => {
  const text = root.createComponent(TextField, {
    style: 'strong',
    alignment: 'center',
  });

  text.appendChild('This is the best extension.');
  root.appendChild(text);

  root.mount();
});
```

#### React Example

```js
import {ExtensionPoint, Text} from '@shopify/argo-admin';
import {extend, render} from '@shopify/argo-admin-react';

function App() {
  return (
    <Text style="strong" alignment="center">
      This is the best extension.
    </Text>
  );
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

**Note:** Some extensions have multiple extension points, like [ProductSubscription](./ExtensionPoints/ProductSubscription/README.md)
