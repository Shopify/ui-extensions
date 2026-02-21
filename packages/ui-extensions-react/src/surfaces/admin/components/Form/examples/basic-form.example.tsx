import {reactExtension, useApi, Form, TextField, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;

  return (
    <Form
      onSubmit={async () => {
        await fetch('/api/products/metadata', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({productId}),
        });
        close();
      }}
      onReset={() => close()}
    >
      <BlockStack gap>
        <TextField label="Warehouse SKU" name="warehouseSku" required />
        <TextField label="Storage location" name="location" />
        <Button variant="primary">Save product metadata</Button>
      </BlockStack>
    </Form>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
