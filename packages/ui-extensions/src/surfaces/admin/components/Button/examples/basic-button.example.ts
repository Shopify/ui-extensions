import {extension, Button, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack);

    const info = root.createComponent(
      Text,
      {},
      `Product: ${productId}`,
    );

    const saveButton = root.createComponent(Button, {
      variant: 'primary',
      onPress: async () => {
        await fetch('/api/products/sync', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({productId}),
        });
        close();
      },
    }, 'Sync to warehouse');

    const cancelButton = root.createComponent(Button, {
      variant: 'secondary',
      onPress: () => close(),
    }, 'Cancel');

    stack.appendChild(info);
    stack.appendChild(saveButton);
    stack.appendChild(cancelButton);
    root.appendChild(stack);
  },
);
