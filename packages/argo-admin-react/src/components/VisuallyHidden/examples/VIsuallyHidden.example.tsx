import React from 'react';
import {extend, render, VisuallyHidden} from '@shopify/argo-admin-react';

function App() {
  return <VisuallyHidden>Update Record</VisuallyHidden>;
}

extend(
  'Playground',
  render(() => <App />),
);
