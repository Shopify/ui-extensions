import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

const SelectRelatedProducts = () => {
  const {data, resourcePicker} = useApi<'admin.product-details.block.render'>();
  const [relatedCount, setRelatedCount] = useState(0);

  const currentProductId = data.selected[0]?.id;

  const handleSelectRelated = async () => {
    const selectedProducts = await resourcePicker({
      type: 'product',
      multiple: true,
      filter: {
        hidden: false,
        draft: false,
      },
    });

    if (selectedProducts) {
      await fetch('/api/product-recommendations', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          productId: currentProductId,
          relatedProducts: selectedProducts.map((p) => p.id),
        }),
      });

      setRelatedCount(selectedProducts.length);
    }
  };

  return (
    <>
      <Button title="Select Related Products" onPress={handleSelectRelated} />
      {relatedCount > 0 && <Text>Added {relatedCount} related products</Text>}
    </>
  );
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <SelectRelatedProducts />,
);
