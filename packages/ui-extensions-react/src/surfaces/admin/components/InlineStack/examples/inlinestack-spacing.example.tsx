import {reactExtension, InlineStack, Icon, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack gap>
      <Text fontWeight="bold">Quick stats</Text>
      <InlineStack gap blockAlignment="center">
        <Icon name="OrdersMajor" accessibilityLabel="Orders" />
        <Text>142 orders this month</Text>
      </InlineStack>
      <InlineStack gap blockAlignment="center">
        <Icon name="InventoryMajor" accessibilityLabel="Inventory" />
        <Text>89 units in stock</Text>
      </InlineStack>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
