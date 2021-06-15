import React from 'react';
import {extend, render, Icon} from '@shopify/admin-ui-extensions-react';

function App() {
  return <Icon source="cancelSmallMinor" />;
}

extend(
  'Playground',
  render(() => <App />),
);
