import React from 'react';
import {reactExtension, Link} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Link onPress={() => console.log('I was pressed.')}>I don't do much.</Link>
  );
}

export default reactExtension('Playground', () => <App />);
