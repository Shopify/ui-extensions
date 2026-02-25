import {useState} from 'react';
import {reactExtension, useApi, ColorPicker, Button, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const [color, setColor] = useState('#000000');

  return (
    <BlockStack>
      <Text fontWeight="bold">Product accent color</Text>
      <ColorPicker value={color} onChange={setColor} />
      <Button
        variant="primary"
        onPress={async () => {
          await fetch('/api/products/accent-color', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, color}),
          });
          close();
        }}
      >
        Save color
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
