import {extension, TextField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let customLabel = '';

    const stack = root.createComponent(BlockStack);

    const field = root.createComponent(TextField, {
      label: 'Custom warehouse label',
      name: 'warehouseLabel',
      onChange: (value) => {
        customLabel = value;
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/label', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, label: customLabel}),
          });
          close();
        },
      },
      'Save label',
    );

    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
