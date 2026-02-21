import {reactExtension, Badge, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Order status:</Text>
      <Badge tone="success">Fulfilled</Badge>
      <Badge tone="warning">Partially fulfilled</Badge>
      <Badge tone="critical">Unfulfilled</Badge>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
