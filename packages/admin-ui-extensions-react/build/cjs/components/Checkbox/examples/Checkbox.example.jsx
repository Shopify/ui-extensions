import React from 'react';
import {extend, render, ExtensionPoint, Checkbox} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <Checkbox label="Opt in to something cool" checked onChange={() => console.log('Checked')} />
  );
}

extend(
  'Playground',
  render(() => <App />),
);
