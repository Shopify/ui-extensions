# Admin UI Extensions React

Admin UI Extensions React is built on top of Admin UI Extensions. It allows a developer to write React-style scripts.

## Usage

```js
import {ExtensionPoint, Text} from '@shopify/admin-ui-extensions';
import {extend, render} from '@shopify/admin-ui-extensions-react';

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
