import React from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

const QueryBeforeClose = () => {
  const {data, query, close} = useApi<'admin.product-details.action.render'>();

  const handleFetchAndClose = async () => {
    const productId = data.selected[0]?.id;

    const {data: result} = await query(
      `query GetProduct($id: ID!) {
        product(id: $id) {
          title
          totalInventory
        }
      }`,
      {variables: {id: productId}},
    );

    console.log(
      `Product: ${result.product.title}, Inventory: ${result.product.totalInventory}`,
    );
    close();
  };

  return (
    <>
      <Text>Ready to fetch product details</Text>
      <Button title="Fetch and Close" onPress={handleFetchAndClose} />
    </>
  );
};

export default reactExtension(
  'admin.product-details.action.render',
  () => <QueryBeforeClose />,
);
