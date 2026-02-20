import {reactExtension, Pressable, Text, InlineStack, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack gap>
      <Text fontWeight="bold">Warehouse locations</Text>
      <Pressable
        padding="base"
        accessibilityLabel="View New York warehouse details — 142 units in stock"
        onPress={() => console.log('Card pressed')}
      >
        <InlineStack gap blockAlignment="center">
          <Text>New York</Text>
            <Text fontWeight="bold">142 units</Text>
        </InlineStack>
      </Pressable>
      <Pressable
        padding="base"
        accessibilityLabel="View Los Angeles warehouse details — 3 units in stock, low stock"
        onPress={() => console.log('Card pressed')}
      >
        <InlineStack gap blockAlignment="center">
          <Text>Los Angeles</Text>
            <Text fontWeight="bold">3 units</Text>
        </InlineStack>
      </Pressable>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
