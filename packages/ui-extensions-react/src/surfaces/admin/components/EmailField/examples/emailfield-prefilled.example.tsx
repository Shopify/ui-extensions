import {reactExtension, EmailField, TextField, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Fulfillment contact</Text>
      <TextField label="Contact name" name="contactName" />
      <EmailField
        label="Contact email"
        name="contactEmail"
        value="fulfillment@example.com"
      />
      <EmailField label="CC email (optional)" name="ccEmail" />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
