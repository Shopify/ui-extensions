import {reactExtension, BlockStack, Text, InlineStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack gap inlineAlignment="center">
      <Text fontWeight="bold">Integration status</Text>
      <InlineStack gap>
        <Text fontWeight="bold">Connected</Text>
        <Text fontWeight="bold">Auto-sync on</Text>
      </InlineStack>
      <Text>247 products synced</Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
