import React from 'react';
import {
  render,
  PasswordField,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <PasswordField label='Password' name="password" />
  );
}
