import React from 'react';
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/admin';

const SelectRelatedProducts = () => {
  const {resourcePicker} = useApi<'admin.product-details.block.render'>();

  const handleSelect = async () => {
    const selectedProducts = await resourcePicker({
      type: 'product',
      multiple: true,
    });

    if (selectedProducts) {
      await fetch('/api/save-related-products', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          productIds: selectedProducts.map((p) => p.id),
        }),
      });
    }
  };

  return null;
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <SelectRelatedProducts />,
);
