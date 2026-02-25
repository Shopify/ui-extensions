import {useState} from 'react';
import {reactExtension, ColorPicker, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const [color, setColor] = useState('rgba(0, 0, 0, 0.5)');

  return (
    <BlockStack>
      <Text fontWeight="bold">Overlay color with transparency</Text>
      <ColorPicker value={color} allowAlpha onChange={setColor} />
      <Text>Selected: {color}</Text>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
