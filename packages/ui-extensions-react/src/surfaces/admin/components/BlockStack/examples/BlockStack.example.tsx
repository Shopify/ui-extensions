import React from 'react';
import {reactExtension, BlockStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <BlockStack inlineAlignment="center" spacing="loose">
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
    </BlockStack>
  );
}

export default reactExtension('Playground', () => <App />);
