import React from 'react';
import {reactExtension, Spinner} from '@shopify/ui-extensions-react/admin';

function App() {
  return <Spinner />;
}

export default reactExtension('Playground', () => <App />);
