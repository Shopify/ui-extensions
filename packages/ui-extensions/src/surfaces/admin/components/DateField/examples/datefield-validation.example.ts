import {extension, DateField, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let expiryDate = '';

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Product expiry',
    );

    const field = root.createComponent(DateField, {
      label: 'Expiration date',
      name: 'expiryDate',
      onChange: (value) => {
        expiryDate = value;
        const selected = new Date(value);
        const today = new Date();
        if (selected <= today) {
          field.updateProps({error: 'Expiry date must be in the future'});
        } else {
          field.updateProps({error: undefined});
        }
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          if (expiryDate) {
            await fetch('/api/products/expiry', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId, expiryDate}),
            });
            close();
          }
        },
      },
      'Set expiry date',
    );

    stack.appendChild(heading);
    stack.appendChild(field);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
