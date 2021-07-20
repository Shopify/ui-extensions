import React from 'react';
import {extend, render, Heading} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <Heading id="profile_heading" level={3}>
      Heading
    </Heading>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
