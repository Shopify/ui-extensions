import {reactExtension, Badge, InlineStack, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Sales channels</Text>
      <InlineStack>
        <Badge size="small-100" tone="success">Online Store</Badge>
        <Badge size="small-100" tone="success">POS</Badge>
        <Badge size="small-100" tone="info">Facebook — pending</Badge>
      </InlineStack>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
