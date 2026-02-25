import {reactExtension, Heading, Section, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Section heading="Custom fields">
        <Heading id="metafields-heading">Metafield values</Heading>
        <Text>
          These custom fields are synced with your external product information
          management system.
        </Text>
      </Section>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
