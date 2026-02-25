import {reactExtension, Icon, Text, BlockStack, Box} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">App status</Text>
      <Box inlineSize={48} blockSize={48}>
        <Icon name="AppsMajor" size="fill" accessibilityLabel="App connected" />
      </Box>
      <Text>Connected to warehouse system</Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
