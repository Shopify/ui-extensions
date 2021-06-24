import React from 'react';
import {extend, render, Pressable} from '@shopify/admin-ui-extensions-react';

function App() {
  return <Pressable onPress={() => console.log('I’ve been pressed!')}>I can be pressed</Pressable>;
}

extend(
  'Playground',
  render(() => <App />),
);
