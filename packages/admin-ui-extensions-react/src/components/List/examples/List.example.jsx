import React from 'react';
import { extend, render, List, ListItem } from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <List type="bullet">
      <ListItem>Yellow shirt</ListItem>
      <ListItem>Red shirt</ListItem>
      <ListItem>Green shirt</ListItem>
    </List>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
