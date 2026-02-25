import {useState} from 'react';
import {reactExtension, useApi, PasswordField, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {close} = useApi('admin.product-details.action.render');
  const [secret, setSecret] = useState('');
  const [error, setError] = useState(undefined);

  return (
    <BlockStack>
      <PasswordField
        label="Webhook secret"
        name="webhookSecret"
        required
        value={secret}
        error={error}
        onChange={(value) => {
          setSecret(value);
          setError(
            value.length > 0 && value.length < 16
              ? 'Secret must be at least 16 characters'
              : undefined,
          );
        }}
      />
      <Button
        variant="primary"
        onPress={async () => {
          if (secret.length >= 16) {
            await fetch('/api/webhooks/secret', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({secret}),
            });
            close();
          }
        }}
      >
        Save webhook secret
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
