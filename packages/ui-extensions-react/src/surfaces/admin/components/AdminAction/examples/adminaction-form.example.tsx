import React from 'react';
import {reactExtension, useApi, AdminAction, Button, TextField, Select, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;

  return (
    <AdminAction
      title="Assign warehouse location"
      primaryAction={
        <Button
          onPress={async () => {
            await fetch('/api/products/assign-warehouse', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({productId}),
            });
            close();
          }}
        >
          Assign to warehouse
        </Button>
      }
      secondaryAction={
        <Button onPress={() => close()}>Cancel</Button>
      }
    >
      <BlockStack gap>
        <TextField label="Warehouse SKU" name="warehouseSku" required />
        <Select
          label="Target warehouse"
          name="warehouse"
          options={[
            {label: 'East Coast — New York', value: 'nyc'},
            {label: 'West Coast — Los Angeles', value: 'lax'},
            {label: 'Central — Chicago', value: 'chi'},
          ]}
        />
      </BlockStack>
    </AdminAction>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
