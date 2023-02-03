import React from 'react';
import {reactExtension, Text} from '@shopify/ui-extensions-react/admin';

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

export default reactExtension('Playground', () => <App />);
