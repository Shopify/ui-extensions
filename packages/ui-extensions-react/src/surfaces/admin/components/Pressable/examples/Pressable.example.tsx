import React from 'react';
import {reactExtension, Pressable} from '@shopify/ui-extensions-react/admin';

function App() {
  return <Pressable onPress={() => console.log('I’ve been pressed!')}>I can be pressed</Pressable>;
}

export default reactExtension('Playground', () => <App />);
