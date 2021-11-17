import React from 'react';
import { extend, render, Badge } from '@shopify/admin-ui-extensions-react';

function App() {
  return <Badge message="Example message" status="success" />;
}

extend(
  'Playground',
  render(() => <App />),
);
