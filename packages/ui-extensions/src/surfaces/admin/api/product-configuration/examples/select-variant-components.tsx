import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

const SelectVariantComponents = () => {
  const {data, resourcePicker} = useApi<'admin.product-variant-details.configuration.render'>();
  const [selected, setSelected] = useState<any[]>([]);

  const parentVariantId = data.selected[0]?.id;

  const handleSelectComponents = async () => {
    const componentVariants = await resourcePicker({
      type: 'variant',
      multiple: 5,
      action: 'select',
      filter: {
        draft: false,
        archived: false,
      },
    });

    if (componentVariants) {
      setSelected(componentVariants);

      await fetch('/api/bundles/configure-variant', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          bundleVariantId: parentVariantId,
          componentVariants: componentVariants.map((v) => ({
            variantId: v.id,
            quantity: 1,
          })),
        }),
      });
    }
  };

  return (
    <>
      <Button title="Select Variant Components" onPress={handleSelectComponents} />
      {selected.length > 0 && <Text>{selected.length} variant components selected</Text>}
    </>
  );
};

export default reactExtension(
  'admin.product-variant-details.configuration.render',
  () => <SelectVariantComponents />,
);
