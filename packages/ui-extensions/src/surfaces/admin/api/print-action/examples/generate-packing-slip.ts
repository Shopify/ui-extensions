import {extension, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.order-details.print-action.render',
  async (root, api) => {
    const {data} = api;

    const orderIds = data.selected.map((item) => item.id);

    const text = root.createComponent(
      Text,
      {},
      `Generating packing slip for ${data.selected.length} orders`,
    );
    root.appendChild(text);

    const response = await fetch('/api/generate-packing-slip', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({orderIds}),
    });

    const {printUrl} = await response.json();
    return printUrl;
  },
);
