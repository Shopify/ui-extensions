import {reactExtension, Icon, Text, InlineStack, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Compliance checks</Text>
      <InlineStack>
        <Icon name="CircleTickMajor" accessibilityLabel="Passed" />
        <Text>Safety standards — passed</Text>
      </InlineStack>
      <InlineStack>
        <Icon
          name="CircleAlertMajor"
          tone="critical"
          accessibilityLabel="Failed"
        />
        <Text>Label requirements — action needed</Text>
      </InlineStack>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
