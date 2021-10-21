import React from 'react';
import {extend, render, InlineStack, StackItem, Text} from '@shopify/admin-ui-extensions-react';

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

extend(
  'Playground',
  render(() => <App />),
);
