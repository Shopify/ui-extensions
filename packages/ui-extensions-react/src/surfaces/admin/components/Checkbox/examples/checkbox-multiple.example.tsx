import {useState} from 'react';
import {reactExtension, useApi, Checkbox, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [channels, setChannels] = useState({
    online: true,
    pos: false,
    wholesale: false,
  });

  return (
    <BlockStack>
      <Text fontWeight="bold">Publish to channels</Text>
      <Checkbox
        label="Online Store"
        checked={channels.online}
        onChange={(value) => setChannels({...channels, online: value})}
      />
      <Checkbox
        label="Point of Sale"
        checked={channels.pos}
        onChange={(value) => setChannels({...channels, pos: value})}
      />
      <Checkbox
        label="Wholesale"
        checked={channels.wholesale}
        onChange={(value) => setChannels({...channels, wholesale: value})}
      />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/channels', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, channels}),
          });
          close();
        }}
      >
        Update channels
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
