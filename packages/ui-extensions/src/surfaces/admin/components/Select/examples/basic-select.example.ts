import {extension, Select, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let warehouse = '';

    const stack = root.createComponent(BlockStack);

    const field = root.createComponent(Select, {
      label: 'Assign warehouse',
      name: 'warehouse',
      options: [
        {label: 'East Coast — New York', value: 'nyc'},
        {label: 'West Coast — Los Angeles', value: 'lax'},
        {label: 'Central — Chicago', value: 'chi'},
        {label: 'International — London', value: 'lon'},
      ],
      onChange: (value) => {
        warehouse = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/warehouse', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, warehouse}),
          });
          close();
        },
      },
      'Assign warehouse',
    );

    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
