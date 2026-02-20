import {useState} from 'react';
import {reactExtension, useApi, Select, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [shippingClass, setShippingClass] = useState('');
  const [error, setError] = useState(undefined);

  return (
    <BlockStack>
      <Select
        label="Shipping class"
        name="shippingClass"
        required
        value={shippingClass}
        error={error}
        options={[
          {label: 'Standard (5-7 days)', value: 'standard'},
          {label: 'Express (2-3 days)', value: 'express'},
          {label: 'Overnight', value: 'overnight'},
          {label: 'Freight', value: 'freight'},
        ]}
        onChange={(value) => {
          setShippingClass(value);
          setError(undefined);
        }}
      />
      <Button
        variant="primary"
        onPress={async () => {
          if (!shippingClass) {
            setError('Please select a shipping class');
            return;
          }
          await fetch('/api/products/shipping-class', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, shippingClass}),
          });
          close();
        }}
      >
        Save shipping class
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
