import {useState} from 'react';
import {reactExtension, useApi, MoneyField, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [cost, setCost] = useState(0);

  return (
    <BlockStack>
      <MoneyField
        label="Cost per item"
        name="costPrice"
        currencyCode="USD"
        value={cost}
        onChange={setCost}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/cost', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, costPrice: cost}),
          });
          close();
        }}
      >
        Save cost price
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
