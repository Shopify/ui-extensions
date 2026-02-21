import {useState} from 'react';
import {reactExtension, useApi, DatePicker, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [dates, setDates] = useState([]);

  return (
    <BlockStack>
      <Text fontWeight="bold">Select shipping blackout dates</Text>
      <Text>Choose dates when this product cannot be shipped.</Text>
      <DatePicker selected={dates} onChange={setDates} />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/blackout-dates', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, blackoutDates: dates}),
          });
          close();
        }}
      >
        Save blackout dates
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
