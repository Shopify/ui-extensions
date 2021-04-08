import React from 'react';
import {extend, render, Badge} from '@shopify/argo-admin-react';

function App() {
  return <Badge message="Example message" status="success" />;
}

extend(
  'Playground',
  render(() => <App />),
);
