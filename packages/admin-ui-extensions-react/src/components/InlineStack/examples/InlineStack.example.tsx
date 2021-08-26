import React from 'react';
import {extend, render, InlineStack, Text} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <InlineStack inlineAlignment="center" spacing="loose">
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
    </InlineStack>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
