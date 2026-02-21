import {useState} from 'react';
import {reactExtension, useApi, DatePicker, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [date, setDate] = useState('');

  return (
    <BlockStack>
      <Text fontWeight="bold">Schedule promotion start</Text>
      <DatePicker selected={date} onChange={setDate} />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/promotion', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, startDate: date}),
          });
          close();
        }}
      >
        Schedule promotion
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
