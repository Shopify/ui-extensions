import React from 'react';
import {
  extend,
  render,
  ExtensionPoint,
  Checkbox,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Checkbox
      label="Opt in to something cool"
      checked
      onChange={() => console.log('Checked')}
    />
  );
}

export default reactExtension('Playground', () => <App />);
