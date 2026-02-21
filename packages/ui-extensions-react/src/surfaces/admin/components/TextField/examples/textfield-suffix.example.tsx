import {reactExtension, TextField, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Shipping configuration</Text>
      <TextField label="Package weight" name="weight" suffix="kg" />
      <TextField
        label="Shopify handle"
        name="handle"
        suffix=".myshopify.com"
        readOnly
      />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
