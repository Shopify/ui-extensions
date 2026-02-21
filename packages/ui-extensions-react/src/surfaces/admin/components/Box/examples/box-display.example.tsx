import {reactExtension, Box, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack gap>
      <Text fontWeight="bold">Compliance status</Text>
      <Box display="auto" padding="base">
        <Text>This product has been reviewed and approved for sale.</Text>
      </Box>
      <Box display="none" accessibilityRole="status">
        <Text>Compliance check passed — accessible to screen readers only.</Text>
      </Box>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
