import {useState} from 'react';
import {reactExtension, ColorPicker, Text, Divider, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const [primary, setPrimary] = useState('#2C6ECB');
  const [secondary, setSecondary] = useState('#F4F6F8');

  return (
    <BlockStack>
      <Text fontWeight="bold">Brand colors for product page</Text>
      <Text>Primary brand color</Text>
      <ColorPicker value={primary} onChange={setPrimary} />
      <Divider />
      <Text>Secondary brand color</Text>
      <ColorPicker value={secondary} onChange={setSecondary} />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
