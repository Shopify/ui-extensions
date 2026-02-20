import {reactExtension, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text>Current price: </Text>
      <Text fontWeight="bold">$49.99</Text>
      <Text fontWeight="bold" fontStyle="italic">
        Compare at: $64.99
      </Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
