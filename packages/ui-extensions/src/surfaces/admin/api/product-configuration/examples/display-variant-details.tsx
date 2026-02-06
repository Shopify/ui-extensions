import React, {useState, useEffect} from 'react';
import {
  reactExtension,
  useApi,
  Text,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

const DisplayVariantDetails = () => {
  const {data, query} =
    useApi<'admin.product-variant-details.configuration.render'>();
  const [variant, setVariant] = useState<any>(null);

  const variantId = data.selected[0]?.id;

  useEffect(() => {
    const fetchVariant = async () => {
      const {data: result} = await query(
        `query GetVariant($id: ID!) {
          productVariant(id: $id) {
            title
            sku
            price
            inventoryQuantity
          }
        }`,
        {variables: {id: variantId}},
      );

      setVariant(result.productVariant);
    };

    fetchVariant();
  }, [variantId, query]);

  return (
    <>
      {variant ? (
        <BlockStack>
          <Text>Variant: {variant.title}</Text>
          <Text>SKU: {variant.sku || 'None'}</Text>
          <Text>Price: ${variant.price}</Text>
          <Text>Inventory: {variant.inventoryQuantity} units</Text>
        </BlockStack>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
};

export default reactExtension(
  'admin.product-variant-details.configuration.render',
  () => <DisplayVariantDetails />,
);
