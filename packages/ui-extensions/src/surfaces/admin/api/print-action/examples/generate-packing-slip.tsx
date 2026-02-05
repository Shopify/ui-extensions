import React from 'react';
import {
  reactExtension,
  useApi,
  Text,
} from '@shopify/ui-extensions-react/admin';

const GeneratePackingSlip = () => {
  const {data} = useApi<'admin.order-details.print-action.render'>();

  return <Text>Generating packing slip for {data.selected.length} orders</Text>;
};

export default reactExtension(
  'admin.order-details.print-action.render',
  async (api) => {
    const {data} = api;

    const orderIds = data.selected.map((item) => item.id);

    const response = await fetch('/api/generate-packing-slip', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({orderIds}),
    });

    const {printUrl} = await response.json();
    return printUrl;
  },
);
