import React from 'react';
import {extend, render, Stack, StackItem, Text} from '@shopify/argo-admin-react';

function App() {
  return (
    <Stack>
      <StackItem fill>
        <Text>Fill the space</Text>
      </StackItem>
      <StackItem>
        <Text>Other text</Text>
        <Text>Even more text</Text>
      </StackItem>
    </Stack>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
