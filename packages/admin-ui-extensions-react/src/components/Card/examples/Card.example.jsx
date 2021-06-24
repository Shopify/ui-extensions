import React from 'react';
import {extend, render, Card} from '@shopify/admin-ui-extensions-react';

function App() {
  return <Card>This is the best extension.</Card>;
}

extend(
  'Playground',
  render(() => <App />),
);
