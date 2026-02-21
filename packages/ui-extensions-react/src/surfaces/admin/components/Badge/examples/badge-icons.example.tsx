import {reactExtension, Badge, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Inventory alerts</Text>
      <Badge tone="success" icon="CircleTickMajor">In stock</Badge>
      <Badge tone="warning" icon="DiamondAlertMajor">Low stock</Badge>
      <Badge tone="critical" icon="DiamondAlertMajor">Out of stock</Badge>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
