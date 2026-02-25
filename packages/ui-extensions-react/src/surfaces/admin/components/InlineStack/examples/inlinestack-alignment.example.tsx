import {reactExtension, useApi, InlineStack, Button, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;

  return (
    <BlockStack gap>
      <Text fontWeight="bold">Confirm action</Text>
      <Text>Sync product {productId} to all warehouse locations?</Text>
      <InlineStack gap inlineAlignment="end">
        <Button variant="tertiary" onPress={() => close()}>Cancel</Button>
        <Button
          variant="primary"
          onPress={async () => {
            await fetch('/api/products/sync-all', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId}),
            });
            close();
          }}
        >
          Sync now
        </Button>
      </InlineStack>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
