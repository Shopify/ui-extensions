import {useState} from 'react';
import {reactExtension, useApi, URLField, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [url, setUrl] = useState('');

  return (
    <BlockStack>
      <Text fontWeight="bold">External product source</Text>
      <URLField
        label="Source URL"
        name="sourceUrl"
        value={url}
        onChange={setUrl}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/source', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, sourceUrl: url}),
          });
          close();
        }}
      >
        Save source URL
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
