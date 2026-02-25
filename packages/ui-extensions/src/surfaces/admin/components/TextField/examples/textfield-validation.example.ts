import {extension, TextField, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let skuValue = '';

    const stack = root.createComponent(BlockStack);

    const skuField = root.createComponent(TextField, {
      label: 'SKU',
      name: 'sku',
      required: true,
      onChange: (value) => {
        skuValue = value;
        if (value.length < 3) {
          skuField.updateProps({error: 'SKU must be at least 3 characters'});
        } else if (!/^[A-Z0-9-]+$/i.test(value)) {
          skuField.updateProps({error: 'SKU can only contain letters, numbers, and hyphens'});
        } else {
          skuField.updateProps({error: undefined});
        }
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          if (skuValue.length >= 3) {
            await fetch('/api/products/sku', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId, sku: skuValue}),
            });
            close();
          }
        },
      },
      'Save SKU',
    );

    stack.appendChild(skuField);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
