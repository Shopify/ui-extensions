import React from 'react';
import {extend, render, Stack, Text} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <Stack vertical>
      <Stack distribution="center" alignment="fill" spacing="loose" wrap={false}>
        <Text>Inline item</Text>
        <Text>Inline item</Text>
        <Text>Inline item</Text>
      </Stack>
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
      <Text>Items to stack</Text>
    </Stack>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
