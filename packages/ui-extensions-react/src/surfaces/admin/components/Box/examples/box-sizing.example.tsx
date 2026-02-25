import {reactExtension, Box, Image, Text, InlineStack, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack gap>
      <InlineStack gap>
        <Box inlineSize={80} blockSize={80}>
          <Image
            source="https://cdn.shopify.com/s/files/placeholder-images/product.png"
            accessibilityLabel="Product thumbnail"
          />
        </Box>
        <Box>
          <Text fontWeight="bold">Premium Widget</Text>
          <Text>SKU: WH-1234</Text>
          <Text>$49.99</Text>
        </Box>
      </InlineStack>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
