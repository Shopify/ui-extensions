import {extension, MoneyField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let costPrice = 0;

    const stack = root.createComponent(BlockStack);

    const field = root.createComponent(MoneyField, {
      label: 'Cost per item',
      name: 'costPrice',
      currencyCode: 'USD',
      onChange: (value) => {
        costPrice = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/cost', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, costPrice}),
          });
          close();
        },
      },
      'Save cost price',
    );

    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
