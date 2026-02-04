import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

const SelectBundleComponents = () => {
  const {data, resourcePicker} = useApi<'admin.product-details.configuration.render'>();
  const [selected, setSelected] = useState<any[]>([]);

  const parentProductId = data.selected[0]?.id;

  const handleSelectComponents = async () => {
    const componentProducts = await resourcePicker({
      type: 'product',
      multiple: 5,
      action: 'select',
      filter: {
        draft: false,
        archived: false,
      },
    });

    if (componentProducts) {
      setSelected(componentProducts);

      await fetch('/api/bundles/configure', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          bundleProductId: parentProductId,
          components: componentProducts.map((p) => ({
            productId: p.id,
            quantity: 1,
          })),
        }),
      });
    }
  };

  return (
    <>
      <Button title="Select Components" onPress={handleSelectComponents} />
      {selected.length > 0 && <Text>{selected.length} components selected</Text>}
    </>
  );
};

export default reactExtension(
  'admin.product-details.configuration.render',
  () => <SelectBundleComponents />,
);
