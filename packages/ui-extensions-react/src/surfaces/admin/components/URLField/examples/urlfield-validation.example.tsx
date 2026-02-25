import {useState} from 'react';
import {reactExtension, useApi, URLField, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {close} = useApi('admin.product-details.action.render');
  const [endpoint, setEndpoint] = useState('');
  const [error, setError] = useState(undefined);

  return (
    <BlockStack>
      <URLField
        label="Webhook endpoint URL"
        name="webhookEndpoint"
        required
        value={endpoint}
        error={error}
        onChange={(value) => {
          setEndpoint(value);
          setError(
            value && !value.startsWith('https://')
              ? 'Webhook endpoints must use HTTPS'
              : undefined,
          );
        }}
      />
      <Button
        variant="primary"
        onPress={async () => {
          if (endpoint.startsWith('https://')) {
            await fetch('/api/webhooks/register', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({endpoint}),
            });
            close();
          }
        }}
      >
        Register webhook
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
