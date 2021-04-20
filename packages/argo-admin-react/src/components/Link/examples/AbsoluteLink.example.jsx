import React from 'react';
import {extend, render, Link} from '@shopify/argo-admin-react';

function App() {
  return (
    <Link url="https://shopify.com" external>
      The best product ever!
    </Link>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
