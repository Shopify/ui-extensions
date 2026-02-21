import {reactExtension, Heading, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Heading>Product analytics</Heading>
      <Text>
        View real-time performance metrics synced from your analytics provider.
      </Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
