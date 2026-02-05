import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;

    const text = root.createComponent(
      Text,
      {},
      `Processing ${data.selected.length} products`,
    );

    const button = root.createComponent(Button, {
      title: 'Process Products',
      onPress: async () => {
        const productIds = data.selected.map((item) => item.id);

        const response = await fetch('/api/bulk-process', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({productIds}),
        });

        if (response.ok) {
          console.log('Products processed successfully');
          close();
        } else {
          console.error('Failed to process products');
        }
      },
    });

    root.appendChild(text);
    root.appendChild(button);
  },
);
