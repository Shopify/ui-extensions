import {reactExtension, BlockStack, Text, Heading, Divider} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack gap padding="base">
      <Heading>Product compliance</Heading>
      <BlockStack gap paddingBlock="base">
        <Text fontWeight="bold">Safety rating</Text>
        <Text>UL Listed — Class II</Text>
      </BlockStack>
      <Divider />
      <BlockStack gap paddingBlock="base">
        <Text fontWeight="bold">Certifications</Text>
        <Text>CE, FCC, RoHS compliant</Text>
      </BlockStack>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
