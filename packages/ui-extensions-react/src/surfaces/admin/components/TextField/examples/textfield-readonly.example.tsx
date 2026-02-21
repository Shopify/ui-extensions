import {useState} from 'react';
import {reactExtension, TextField, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  const [handle, setHandle] = useState('premium-widget');

  return (
    <BlockStack>
      <Text fontWeight="bold">Shipping configuration</Text>
      <TextField
        label="Package weight (kg)"
        name="weight"
        placeholder="e.g. 2.5"
      />
      <TextField
        label="Store handle"
        name="handle"
        value={handle}
        onChange={setHandle}
        readOnly
      />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
