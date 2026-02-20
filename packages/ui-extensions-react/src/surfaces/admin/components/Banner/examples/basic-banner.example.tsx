import {useState} from 'react';
import {reactExtension, useApi, Banner, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <BlockStack>
      <Banner
        title="Product sync failed"
        tone="critical"
        dismissible
        onDismiss={() => setVisible(false)}
        primaryAction={
          <Button
            onPress={async () => {
              await fetch('/api/products/sync', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({productId}),
              });
            }}
          >
            Retry sync
          </Button>
        }
      >
        The last sync attempt could not reach your warehouse system. Check your
        API credentials and try again.
      </Banner>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
