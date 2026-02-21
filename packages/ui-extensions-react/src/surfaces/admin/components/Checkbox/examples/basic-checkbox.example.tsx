import {useState} from 'react';
import {reactExtension, useApi, Checkbox, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [syncEnabled, setSyncEnabled] = useState(false);

  return (
    <BlockStack>
      <Checkbox
        label="Enable automatic inventory sync"
        checked={syncEnabled}
        onChange={setSyncEnabled}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/sync-settings', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, syncEnabled}),
          });
          close();
        }}
      >
        Save settings
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
