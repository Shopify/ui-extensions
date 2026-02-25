import {useState, useEffect} from 'react';
import {reactExtension, useApi, Image, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, query} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    query(
      `query Product($id: ID!) {
        product(id: $id) {
          title
          featuredImage { url altText }
        }
      }`,
      {variables: {id: productId}},
    ).then((result) => setProduct(result?.data?.product));
  }, [productId, query]);

  if (!product?.featuredImage) return null;

  return (
    <BlockStack>
      <Image
        source={product.featuredImage.url}
        accessibilityLabel={product.featuredImage.altText || product.title}
      />
      <Text>{product.title}</Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
