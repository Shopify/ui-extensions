import React from 'react';
import {reactExtension, InlineStack, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <InlineStack inlineAlignment="center" spacing="loose">
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
    </InlineStack>
  );
}

export default reactExtension('Playground', () => <App />);
