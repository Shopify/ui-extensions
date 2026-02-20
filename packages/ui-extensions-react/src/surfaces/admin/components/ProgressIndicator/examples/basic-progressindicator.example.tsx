import {useState, useEffect} from 'react';
import {reactExtension, useApi, ProgressIndicator, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, query} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    query(
      `query Product($id: ID!) {
        product(id: $id) { title totalInventory }
      }`,
      {variables: {id: productId}},
    ).then((result) => {
      setProduct(result?.data?.product);
      setLoading(false);
    });
  }, [productId, query]);

  return (
    <BlockStack>
      {loading ? (
        <ProgressIndicator
          size="small-200"
          accessibilityLabel="Loading product data"
        />
      ) : product ? (
        <>
          <Text fontWeight="bold">{product.title}</Text>
          <Text>Total inventory: {product.totalInventory} units</Text>
        </>
      ) : null}
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
