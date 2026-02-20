import {reactExtension, Heading, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <BlockStack gap>
        <Heading id="metafields-heading">Metafield values</Heading>
        <Text>
          These custom fields are synced with your external product information
          management system.
        </Text>
      </BlockStack>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
