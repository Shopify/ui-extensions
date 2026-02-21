import {reactExtension, useApi, AdminAction, Button, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;

  return (
    <AdminAction
      title="Sync to warehouse"
      primaryAction={
        <Button
          onPress={async () => {
            await fetch('/api/products/sync', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId}),
            });
            close();
          }}
        >
          Sync product
        </Button>
      }
      secondaryAction={
        <Button onPress={() => close()}>Cancel</Button>
      }
    >
      <BlockStack gap>
        <Text>
          Sync product {productId} to your warehouse management system. This
          will update inventory counts, pricing, and metadata.
        </Text>
      </BlockStack>
    </AdminAction>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
