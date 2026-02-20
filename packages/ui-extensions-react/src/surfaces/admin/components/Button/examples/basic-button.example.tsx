import {reactExtension, useApi, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;

  return (
    <BlockStack>
      <Text>Product: {productId}</Text>
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/sync', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId}),
          });
          close();
        }}
      >
        Sync to warehouse
      </Button>
      <Button variant="secondary" onPress={() => close()}>
        Cancel
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
