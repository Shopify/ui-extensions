import {useState} from 'react';
import {reactExtension, useApi, MoneyField, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(undefined);

  return (
    <BlockStack>
      <MoneyField
        label="Wholesale price"
        name="wholesalePrice"
        currencyCode="USD"
        min={0.01}
        required
        value={price}
        error={error}
        onChange={(value) => {
          setPrice(value);
          setError(value <= 0 ? 'Wholesale price must be greater than zero' : undefined);
        }}
      />
      <Button
        variant="primary"
        onPress={async () => {
          if (price > 0) {
            await fetch('/api/products/wholesale-price', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId, wholesalePrice: price}),
            });
            close();
          }
        }}
      >
        Save wholesale price
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
