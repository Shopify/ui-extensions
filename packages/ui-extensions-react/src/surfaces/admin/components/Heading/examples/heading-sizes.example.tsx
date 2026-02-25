import {reactExtension, Heading, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Heading size={2}>Warehouse integration</Heading>
      <Text>
        Manage inventory sync and fulfillment settings for this product.
      </Text>
      <Heading size={3}>Sync history</Heading>
      <Text>
        Last synced 15 minutes ago — 3 variants updated successfully.
      </Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
