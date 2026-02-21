import {useState, useEffect} from 'react';
import {reactExtension, useApi, Paragraph, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, query} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    query(
      `query Product($id: ID!) {
        product(id: $id) {
          status
          title
        }
      }`,
      {variables: {id: productId}},
    ).then((result) => setProduct(result?.data?.product));
  }, [productId, query]);

  if (!product || product.status !== 'DRAFT') return null;

  return (
    <BlockStack>
      <Paragraph>
        <Text>
          "{product.title}" is currently in draft status. Complete the product
          description, add at least one image, and set pricing before publishing
          to your storefront.
        </Text>
      </Paragraph>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
