import {useState} from 'react';
import {reactExtension, useApi, EmailField, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [email, setEmail] = useState('');
  const [error, setError] = useState(undefined);

  return (
    <BlockStack>
      <EmailField
        label="Supplier contact email"
        name="supplierEmail"
        required
        value={email}
        error={error}
        onChange={(value) => {
          setEmail(value);
          setError(
            value && !value.includes('@')
              ? 'Enter a valid email address'
              : undefined,
          );
        }}
      />
      <Button
        variant="primary"
        onPress={async () => {
          if (email.includes('@')) {
            await fetch('/api/suppliers/contact', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId, email}),
            });
            close();
          }
        }}
      >
        Save supplier contact
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
