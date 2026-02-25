import {extension, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {},
      'Choose an action for this product:',
    );

    const publishButton = root.createComponent(Button, {
      variant: 'primary',
      onPress: async () => {
        await fetch(`/api/products/${productId}/publish`, {method: 'POST'});
        close();
      },
    }, 'Publish product');

    const archiveButton = root.createComponent(Button, {
      variant: 'tertiary',
      onPress: async () => {
        await fetch(`/api/products/${productId}/archive`, {method: 'POST'});
        close();
      },
    }, 'Archive product');

    const deleteButton = root.createComponent(Button, {
      tone: 'critical',
      onPress: async () => {
        await fetch(`/api/products/${productId}`, {method: 'DELETE'});
        close();
      },
    }, 'Delete product');

    stack.appendChild(heading);
    stack.appendChild(publishButton);
    stack.appendChild(archiveButton);
    stack.appendChild(deleteButton);
    root.appendChild(stack);
  },
);
