import {useState} from 'react';
import {reactExtension, useApi, DateField, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [date, setDate] = useState('');
  const [error, setError] = useState(undefined);

  return (
    <BlockStack>
      <Text fontWeight="bold">Product expiry</Text>
      <DateField
        label="Expiration date"
        name="expiryDate"
        value={date}
        error={error}
        onChange={(value) => {
          setDate(value);
          const selected = new Date(value);
          const today = new Date();
          setError(
            selected <= today ? 'Expiry date must be in the future' : undefined,
          );
        }}
      />
      <Button
        variant="primary"
        onPress={async () => {
          if (date) {
            await fetch('/api/products/expiry', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId, expiryDate: date}),
            });
            close();
          }
        }}
      >
        Set expiry date
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
