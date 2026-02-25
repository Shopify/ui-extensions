import {reactExtension, BlockStack, Text, Badge, InlineStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack gap inlineAlignment="center">
      <Text fontWeight="bold">Integration status</Text>
      <InlineStack gap>
        <Badge tone="success">Connected</Badge>
        <Badge tone="info">Auto-sync on</Badge>
      </InlineStack>
      <Text>247 products synced</Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
