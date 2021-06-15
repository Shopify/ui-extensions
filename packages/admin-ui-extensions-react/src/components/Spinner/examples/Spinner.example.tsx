import React from 'react';
import {extend, render, Spinner} from '@shopify/admin-ui-extensions-react';

function App() {
  return <Spinner />;
}

extend(
  'Playground',
  render(() => <App />),
);
