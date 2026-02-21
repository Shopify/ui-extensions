import {reactExtension, Divider, Text, InlineStack, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <InlineStack>
        <Text fontWeight="bold">$49.99</Text>
        <Divider direction="block" />
        <Text>SKU: WH-1234</Text>
      </InlineStack>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
