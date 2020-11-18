# Argo Admin React

Argo Admin React is built on top of Argo Admin. It allows a developer to write React-style scripts.

## Usage

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
