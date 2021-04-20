import React from 'react';
import {extend, render, Spinner} from '@shopify/argo-admin-react';

function App() {
  return <Spinner />;
}

extend(
  'Playground',
  render(() => <App />),
);
