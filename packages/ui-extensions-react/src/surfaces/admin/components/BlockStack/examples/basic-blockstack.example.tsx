import {reactExtension, BlockStack, Text, Button} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack gap>
      <Text fontWeight="bold">Warehouse sync</Text>
      <Text>Last synced 10 minutes ago</Text>
      <Text>12 variants, 3 locations updated</Text>
      <Button variant="secondary" onPress={() => console.log('Viewing sync log')}>
        View sync log
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
