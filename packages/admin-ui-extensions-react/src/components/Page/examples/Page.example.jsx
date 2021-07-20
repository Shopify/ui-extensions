import React from 'react';
import {extend, render, Page} from '@shopify/admin-ui-extensions-react';

function App() {
  return <Page>View product</Page>;
}

extend(
  'Playground',
  render(() => <App />),
);
