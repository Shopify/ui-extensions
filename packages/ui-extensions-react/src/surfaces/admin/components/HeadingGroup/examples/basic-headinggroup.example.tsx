import {reactExtension, HeadingGroup, Heading, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Heading>Warehouse integration</Heading>
      <HeadingGroup>
        <Heading>Sync configuration</Heading>
        <Text>
          Configure how product data flows between Shopify and your warehouse
          management system.
        </Text>
      </HeadingGroup>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
