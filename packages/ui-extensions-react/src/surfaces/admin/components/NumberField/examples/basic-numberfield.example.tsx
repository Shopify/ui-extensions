import {useState} from 'react';
import {reactExtension, useApi, NumberField, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [quantity, setQuantity] = useState(0);

  return (
    <BlockStack>
      <NumberField
        label="Restock quantity"
        name="quantity"
        min={1}
        max={10000}
        value={quantity}
        onChange={setQuantity}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/inventory/restock', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, quantity}),
          });
          close();
        }}
      >
        Submit restock
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
