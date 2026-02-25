import {reactExtension, Paragraph, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Paragraph>
        <Text>Last sync completed at </Text>
        <Text fontWeight="bold">2:45 PM EST</Text>
        <Text>
          . All product tags and metafields were successfully pushed to the
          warehouse management system.{' '}
        </Text>
        <Text fontWeight="bold">24 fields</Text>
        <Text> updated across 3 variants.</Text>
      </Paragraph>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
