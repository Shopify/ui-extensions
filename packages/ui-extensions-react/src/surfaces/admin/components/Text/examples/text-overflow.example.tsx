import {reactExtension, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Product description</Text>
      <Text textOverflow="ellipsis">
        This premium organic cotton t-shirt features a relaxed fit with
        reinforced stitching, available in twelve colors with custom embroidery
        options for wholesale orders.
      </Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
