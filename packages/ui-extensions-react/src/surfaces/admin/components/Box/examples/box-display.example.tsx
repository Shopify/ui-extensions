import {reactExtension, Box, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack gap>
      <Text fontWeight="bold">Compliance status</Text>
      <Box padding="base" accessibilityRole="status">
        <Text>This product has been reviewed and approved for sale.</Text>
      </Box>
      <Box padding="base" accessibilityRole="section">
        <Text>Shipping origin: United States</Text>
        <Text>HS code: 6110.20</Text>
      </Box>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
