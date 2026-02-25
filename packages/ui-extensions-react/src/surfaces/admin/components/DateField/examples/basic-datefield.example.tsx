import {useState} from 'react';
import {reactExtension, useApi, DateField, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [date, setDate] = useState('');

  return (
    <BlockStack>
      <DateField
        label="Product launch date"
        name="launchDate"
        value={date}
        onChange={setDate}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/launch-date', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, launchDate: date}),
          });
          close();
        }}
      >
        Schedule launch
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
