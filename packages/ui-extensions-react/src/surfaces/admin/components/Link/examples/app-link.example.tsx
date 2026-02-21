import {reactExtension, Link, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack gap>
      <Text fontWeight="bold">Manage this product</Text>
      <Link href="extension://settings">Extension settings</Link>
      <Link href="extension://dashboard">Sync dashboard</Link>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
