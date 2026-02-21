import {extension, AdminAction, Button, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;

    const content = root.createComponent(BlockStack, {gap: true});
    const message = root.createComponent(
      Text,
      {},
      `Sync product ${productId} to your warehouse management system. This will update inventory counts, pricing, and metadata.`,
    );
    content.appendChild(message);

    const primaryAction = root.createComponent(
      Button,
      {
        onPress: async () => {
          await fetch('/api/products/sync', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId}),
          });
          close();
        },
      },
      'Sync product',
    );

    const secondaryAction = root.createComponent(
      Button,
      {onPress: () => close()},
      'Cancel',
    );

    const action = root.createComponent(AdminAction, {
      title: 'Sync to warehouse',
      primaryAction,
      secondaryAction,
    });

    action.appendChild(content);
    root.appendChild(action);
  },
);
