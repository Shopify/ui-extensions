import {reactExtension, Divider, Heading, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Heading>Sync status</Heading>
      <Text>Last synced 5 minutes ago — all fields up to date.</Text>
      <Divider />
      <Heading size={3}>Recent changes</Heading>
      <Text>3 metafields updated, 1 tag added in the last 24 hours.</Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
