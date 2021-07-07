import React from 'react';
import {extend, render, TextBlock} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <TextBlock>TextBlock</TextBlock>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
