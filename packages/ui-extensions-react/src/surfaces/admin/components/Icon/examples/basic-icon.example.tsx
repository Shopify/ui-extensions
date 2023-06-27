import React from 'react';
import {
  render,
  Icon,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <Icon name="AppsMajor" />
  );
}
