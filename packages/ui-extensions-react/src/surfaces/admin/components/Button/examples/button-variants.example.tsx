import {reactExtension, useApi, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;

  return (
    <BlockStack>
      <Text>Choose an action for this product:</Text>
      <Button
        variant="primary"
        onPress={async () => {
          await fetch(`/api/products/${productId}/publish`, {method: 'POST'});
          close();
        }}
      >
        Publish product
      </Button>
      <Button
        variant="tertiary"
        onPress={async () => {
          await fetch(`/api/products/${productId}/archive`, {method: 'POST'});
          close();
        }}
      >
        Archive product
      </Button>
      <Button
        tone="critical"
        onPress={async () => {
          await fetch(`/api/products/${productId}`, {method: 'DELETE'});
          close();
        }}
      >
        Delete product
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
