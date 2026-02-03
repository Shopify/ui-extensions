import React from 'react';
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/admin';

const SelectResources = () => {
  const {data, resourcePicker, close} = useApi<'admin.product-details.action.render'>();

  const handleSelect = async () => {
    const currentProductId = data.selected[0]?.id;

    const selectedProducts = await resourcePicker({
      type: 'product',
      multiple: 5,
      action: 'select',
    });

    if (selectedProducts) {
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

  return null;
};

export default reactExtension(
  'admin.product-details.action.render',
  () => <SelectResources />,
);
