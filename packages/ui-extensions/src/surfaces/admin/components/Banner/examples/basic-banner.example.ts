import {extension, Banner, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack);

    const retryButton = root.createComponent(
      Button,
      {
        onPress: async () => {
          await fetch('/api/products/sync', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId}),
          });
        },
      },
      'Retry sync',
    );

    const banner = root.createComponent(
      Banner,
      {
        title: 'Product sync failed',
        tone: 'critical',
        dismissible: true,
        onDismiss: () => {
          stack.removeChild(banner);
        },
        primaryAction: retryButton,
      },
      'The last sync attempt could not reach your warehouse system. Check your API credentials and try again.',
    );

    stack.appendChild(banner);
    root.appendChild(stack);
  },
);
