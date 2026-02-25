import {extension, NumberField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let quantity = 0;

    const stack = root.createComponent(BlockStack);

    const field = root.createComponent(NumberField, {
      label: 'Restock quantity',
      name: 'quantity',
      min: 1,
      max: 10000,
      onChange: (value) => {
        quantity = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/inventory/restock', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, quantity}),
          });
          close();
        },
      },
      'Submit restock',
    );

    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
