import React, {useState, useEffect} from 'react';
import {reactExtension, useApi, AdminAction, Button, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close, query} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    query(
      `query Product($id: ID!) {
        product(id: $id) { title status totalInventory }
      }`,
      {variables: {id: productId}},
    ).then((result) => {
      setProduct(result?.data?.product);
      setLoading(false);
    });
  }, [productId, query]);

  return (
    <AdminAction
      title="Product details"
      primaryAction={<Button onPress={() => close()}>Done</Button>}
    >
      <BlockStack gap>
        {loading ? (
          <Text>Loading product details...</Text>
        ) : product ? (
          <>
            <Text fontWeight="bold">{product.title}</Text>
            <Text>Status: {product.status}</Text>
            <Text>Inventory: {product.totalInventory} units</Text>
          </>
        ) : null}
      </BlockStack>
    </AdminAction>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
