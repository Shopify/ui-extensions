import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;

    const productIds = data.selected.map((item) => item.id);

    fetch('/api/bulk-process', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({productIds}),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Products processed successfully');
          close();
        } else {
          console.error('Failed to process products');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },
);
