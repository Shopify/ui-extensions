import React from 'react';
import {extend, render, Text} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <>
      <Text size="small"
        emphasized
        subdued
        role='address'
        id='some_id'
        appearance='accent'
      >
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
