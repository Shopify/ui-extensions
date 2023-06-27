import React from 'react';
import {
  render,
  NumberField,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <NumberField label='Count' name="count" />
  );
}
