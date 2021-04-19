# Product Data

_this is for SubscriptionManagement and will be refactored_

## Implementation

#### Vanilla

```js
import {ExtensionPoint, render, Text} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root, api) => {
  const {shopId, productId, variantId, action, additionalData} = api.productData;

  const productDataText = root.createComponent(Text);
  productDataText.appendChild(`
      Here is my product data:
      - shop id: ${shopId}
      - product id: ${productId}
      - variant id: ${variantId}
      - action: ${action}
      - additionalData: ${JSON.stringify(additionalData, null, 2)}
    `);

  root.appendChild(productDataText);
  root.mount();
});
```

#### React

```js
import {ExtensionPoint, Text} from '@shopify/argo-admin';
import {render, useProductData} from '@shopify/argo-admin/react';

function App() {
  const {shopId, productId, variantId, action, additionalData} = useProductData();

  return (
    <Text>
      {`
      Here is my product data:
      - shop id: ${shopId}
      - product id: ${productId}
      - variant id: ${variantId}
      - action: ${action}
      - additionalData: ${JSON.stringify(additionalData, null, 2)}
    `}
    </Text>
  );
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Product Data API

### `productData`

| Name           | Type     | Description                            | Required |
| -------------- | -------- | -------------------------------------- | -------- |
| shopId         | `number` | The id of the current shop.            |          |
| productId      | `number` | The id of the current product.         |          |
| variantId      | `number` | The id of the current product variant. |          |
| additionalData | `object` |                                        |          |
