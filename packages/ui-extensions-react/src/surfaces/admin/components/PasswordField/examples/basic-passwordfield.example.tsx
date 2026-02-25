import {useState} from 'react';
import {reactExtension, useApi, PasswordField, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const [apiKey, setApiKey] = useState('');

  return (
    <BlockStack>
      <Text fontWeight="bold">Connect warehouse API</Text>
      <PasswordField
        label="API key"
        name="apiKey"
        value={apiKey}
        onChange={setApiKey}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/integrations/warehouse', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({apiKey}),
          });
          close();
        }}
      >
        Save credentials
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
