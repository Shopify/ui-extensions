import {reactExtension, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontStyle="italic" accessibilityRole="emphasis">
        This product is currently in draft status and not visible to customers.
      </Text>
      <Text fontWeight="bold" accessibilityRole="strong">
        Action required: Complete all required fields before publishing.
      </Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
