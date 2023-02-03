import React from 'react';
import {reactExtension, InlineStack, StackItem, Text} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <InlineStack>
      <StackItem fill>
        <Text>Fill the space</Text>
      </StackItem>
      <StackItem>
        <Text>Other text</Text>
        <Text>Even more text</Text>
      </StackItem>
    </InlineStack>
  );
}

export default reactExtension('Playground', () => <App />);
