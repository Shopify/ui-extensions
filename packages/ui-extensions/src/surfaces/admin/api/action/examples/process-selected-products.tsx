import React from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

const ProcessProducts = () => {
  const {data, close} = useApi<'admin.product-details.action.render'>();

  const handleProcess = async () => {
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
  };

  return (
    <>
      <Text>Processing {data.selected.length} products</Text>
      <Button title="Process Products" onPress={handleProcess} />
    </>
  );
};

export default reactExtension(
  'admin.product-details.action.render',
  () => <ProcessProducts />,
);
