import React from 'react';
import {extend, render, BlockStack, Text} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <BlockStack inlineAlignment="center" spacing="loose">
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
    </BlockStack>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
