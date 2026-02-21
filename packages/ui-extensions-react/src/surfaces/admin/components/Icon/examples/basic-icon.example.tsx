import {reactExtension, Icon, Text, InlineStack, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <InlineStack>
        <Icon name="CircleTickMajor" accessibilityLabel="Synced" />
        <Text>Inventory synced</Text>
      </InlineStack>
      <InlineStack>
        <Icon name="CircleAlertMajor" accessibilityLabel="Error" />
        <Text>Pricing error detected</Text>
      </InlineStack>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
