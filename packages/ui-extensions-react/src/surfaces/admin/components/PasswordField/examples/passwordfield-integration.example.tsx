import {reactExtension, useApi, PasswordField, TextField, EmailField, Button, BlockStack, Heading} from '@shopify/ui-extensions-react/admin';

function App() {
  const {close} = useApi('admin.product-details.action.render');

  return (
    <BlockStack>
      <Heading>Connect fulfillment service</Heading>
      <TextField label="API endpoint" name="endpoint" />
      <EmailField label="Account email" name="accountEmail" />
      <PasswordField label="API token" name="apiToken" />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/fulfillment/connect', {method: 'POST'});
          close();
        }}
      >
        Connect service
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
