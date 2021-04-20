import React from 'react';
import {extend, render, Link} from '@shopify/argo-admin-react';

function App() {
  return <Link url="/admin/products/12345">View product</Link>;
}

extend(
  'Playground',
  render(() => <App />),
);
