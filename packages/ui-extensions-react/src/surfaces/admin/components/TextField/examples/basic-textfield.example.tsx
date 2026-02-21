import {useState} from 'react';
import {reactExtension, useApi, TextField, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [label, setLabel] = useState('');

  return (
    <BlockStack>
      <TextField
        label="Custom warehouse label"
        name="warehouseLabel"
        value={label}
        onChange={setLabel}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/label', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, label}),
          });
          close();
        }}
      >
        Save label
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
