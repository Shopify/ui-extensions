import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

const SelectComponents = () => {
  const {data, resourcePicker, close} = useApi<'admin.product-details.action.render'>();
  const [selected, setSelected] = useState<any[] | null>(null);

  const currentProductId = data.selected[0]?.id;

  const handleSelectProducts = async () => {
    const selectedProducts = await resourcePicker({
      type: 'product',
      multiple: 5,
      action: 'select',
    });

    if (selectedProducts) {
      setSelected(selectedProducts);

      await fetch('/api/create-bundle', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          mainProduct: currentProductId,
          components: selectedProducts.map((p) => p.id),
        }),
      });

      close();
    }
  };

  return (
    <>
      <Text>Main product: {currentProductId}</Text>
      <Button title="Select Component Products" onPress={handleSelectProducts} />
      {selected && <Text>Selected {selected.length} products</Text>}
    </>
  );
};

export default reactExtension(
  'admin.product-details.action.render',
  () => <SelectComponents />,
);
