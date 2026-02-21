import {useState} from 'react';
import {reactExtension, useApi, Select, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [warehouse, setWarehouse] = useState('');

  return (
    <BlockStack>
      <Select
        label="Assign warehouse"
        name="warehouse"
        value={warehouse}
        options={[
          {label: 'East Coast — New York', value: 'nyc'},
          {label: 'West Coast — Los Angeles', value: 'lax'},
          {label: 'Central — Chicago', value: 'chi'},
          {label: 'International — London', value: 'lon'},
        ]}
        onChange={setWarehouse}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/warehouse', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, warehouse}),
          });
          close();
        }}
      >
        Assign warehouse
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
