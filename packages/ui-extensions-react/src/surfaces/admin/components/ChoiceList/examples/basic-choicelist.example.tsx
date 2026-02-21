import {useState} from 'react';
import {reactExtension, useApi, ChoiceList, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [shippingMethod, setShippingMethod] = useState('standard');

  return (
    <BlockStack>
      <ChoiceList
        name="shippingMethod"
        value={shippingMethod}
        choices={[
          {label: 'Standard shipping (5-7 business days)', id: 'standard'},
          {label: 'Express shipping (2-3 business days)', id: 'express'},
          {label: 'Overnight delivery', id: 'overnight'},
        ]}
        onChange={setShippingMethod}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/shipping-method', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, shippingMethod}),
          });
          close();
        }}
      >
        Save shipping method
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
