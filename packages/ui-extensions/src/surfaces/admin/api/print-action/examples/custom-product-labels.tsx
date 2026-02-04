import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Text,
  Button,
} from '@shopify/ui-extensions-react/admin';

const CustomProductLabels = () => {
  const {data, resourcePicker} = useApi<'admin.product-details.print-action.render'>();
  const [additionalCount, setAdditionalCount] = useState(0);

  const handleSelectMore = async () => {
    const additionalProducts = await resourcePicker({
      type: 'product',
      multiple: 10,
      action: 'add',
    });

    if (additionalProducts) {
      setAdditionalCount(additionalProducts.length);
    }
  };

  return (
    <>
      <Text>{data.selected.length} products selected</Text>
      <Button title="Add More Products" onPress={handleSelectMore} />
      {additionalCount > 0 && <Text>+{additionalCount} additional</Text>}
    </>
  );
};

export default reactExtension(
  'admin.product-details.print-action.render',
  async (api) => {
    const {data} = api;

    const productIds = data.selected.map((item) => item.id);

    const response = await fetch('/api/generate-labels', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({productIds}),
    });

    const {printUrl} = await response.json();
    return printUrl;
  },
);
