import React, {useState, useEffect} from 'react';
import {reactExtension, useApi, AdminBlock, Text, ProgressIndicator, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, query} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    query(
      `query Product($id: ID!) {
        product(id: $id) { title totalInventory totalVariants }
      }`,
      {variables: {id: productId}},
    ).then((result) => {
      setProduct(result?.data?.product);
      setLoading(false);
    });
  }, [productId, query]);

  return (
    <AdminBlock title="Product analytics">
      <BlockStack gap>
        {loading ? (
          <ProgressIndicator size="small-200" accessibilityLabel="Loading analytics" />
        ) : product ? (
          <>
            <Text fontWeight="bold">{product.title}</Text>
            <Text>Variants: {product.totalVariants}</Text>
            <Text>Total inventory: {product.totalInventory}</Text>
          </>
        ) : null}
      </BlockStack>
    </AdminBlock>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
