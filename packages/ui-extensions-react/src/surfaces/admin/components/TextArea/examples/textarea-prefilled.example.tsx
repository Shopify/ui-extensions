import {useState, useEffect} from 'react';
import {reactExtension, useApi, TextArea, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, query} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    query(
      `query Product($id: ID!) {
        product(id: $id) {
          metafield(namespace: "custom", key: "shipping_instructions") { value }
        }
      }`,
      {variables: {id: productId}},
    ).then((result) => {
      setInstructions(result?.data?.product?.metafield?.value || '');
    });
  }, [productId, query]);

  return (
    <BlockStack>
      <Text fontWeight="bold">Shipping instructions</Text>
      <TextArea
        label="Special handling instructions"
        name="shippingInstructions"
        rows={3}
        value={instructions}
        readOnly
      />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
