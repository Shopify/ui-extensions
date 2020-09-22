# Data

Extension points may provide relevant data to the extension. The type of data varies from extension point to extension point.

## Implementation

Below are examples of implementing the data API for the Subscription Management Add extension point.

#### Vanilla

```js
import {extend, ExtensionPoint, Text} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {productId, variantId} = api.data;

  const productDataText = root.createComponent(Text);
  productDataText.appendChild(`
      Here is my product data:
      - product id: ${productId}
      - variant id: ${variantId}
    `);

  root.appendChild(productDataText);
  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Text, useData} from '@shopify/argo-admin-react';

function App() {
  const {productId, variantId} = useData();

  return (
    <Text>
      {`
      Here is my product data:
      - product id: ${productId}
      - variant id: ${variantId}
    `}
    </Text>
  );
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

## Extension Points with Data API

- [Subscription Management](../ExtensionPoints/SubscriptionManagement/README.md#data-api)
