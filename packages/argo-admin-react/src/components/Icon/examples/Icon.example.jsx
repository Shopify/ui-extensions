import React from 'react';
import {extend, render, Icon} from '@shopify/argo-admin-react';

function App() {
  return <Icon source="cancelSmallMinor" />;
}

extend(
  'Playground',
  render(() => <App />),
);
