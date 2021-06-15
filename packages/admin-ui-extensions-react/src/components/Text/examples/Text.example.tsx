import React from 'react';
import {extend, render, Text} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <>
      <Text size="small" style="italic" color="success" alignment="center">
        Formatted text is awesome!
      </Text>
      This simple text is a bit less awesome
    </>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
