import {extension, DateField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let launchDate = '';

    const stack = root.createComponent(BlockStack);

    const field = root.createComponent(DateField, {
      label: 'Product launch date',
      name: 'launchDate',
      onChange: (value) => {
        launchDate = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/launch-date', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, launchDate}),
          });
          close();
        },
      },
      'Schedule launch',
    );

    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
