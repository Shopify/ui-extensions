import {reactExtension, Box, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack gap>
      <Text fontWeight="bold">Warehouse slot</Text>
      <Box padding="base">
        <Text fontWeight="bold">Slot A-42</Text>
        <Text>Aisle A, Rack 4, Shelf 2</Text>
        <Text>24 units stored</Text>
      </Box>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
