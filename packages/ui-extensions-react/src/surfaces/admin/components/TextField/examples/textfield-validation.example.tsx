import {useState} from 'react';
import {reactExtension, useApi, TextField, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [sku, setSku] = useState('');
  const [error, setError] = useState(undefined);

  function validate(value) {
    if (value.length < 3) {
      return 'SKU must be at least 3 characters';
    }
    if (!/^[A-Z0-9-]+$/i.test(value)) {
      return 'SKU can only contain letters, numbers, and hyphens';
    }
    return undefined;
  }

  return (
    <BlockStack>
      <TextField
        label="SKU"
        name="sku"
        required
        value={sku}
        error={error}
        onChange={(value) => {
          setSku(value);
          setError(validate(value));
        }}
      />
      <Button
        variant="primary"
        onPress={async () => {
          const validationError = validate(sku);
          if (!validationError) {
            await fetch('/api/products/sku', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId, sku}),
            });
            close();
          }
        }}
      >
        Save SKU
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
