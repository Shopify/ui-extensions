import {useState} from 'react';
import {reactExtension, useApi, DatePicker, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [range, setRange] = useState({start: '', end: ''});

  return (
    <BlockStack>
      <Text fontWeight="bold">Set sale period</Text>
      <DatePicker selected={range} onChange={setRange} />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/sale-period', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, ...range}),
          });
          close();
        }}
      >
        Save sale period
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
