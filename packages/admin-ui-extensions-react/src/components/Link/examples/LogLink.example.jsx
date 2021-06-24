import React from 'react';
import {extend, render, Link} from '@shopify/admin-ui-extensions-react';

function App() {
  return <Link onPress={() => console.log('I was pressed.')}>I don't do much.</Link>;
}

extend(
  'Playground',
  render(() => <App />),
);
