import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.order-details.print-action.render',
  async (root, api) => {
    const {data} = api;

    const orderIds = data.selected.map((item) => item.id);

    const response = await fetch('/api/generate-packing-slip', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({orderIds}),
    });

    const result = await response.json();
    return result.pdfUrl;
  },
);
