import React from 'react';
import {reactExtension, Card} from '@shopify/ui-extensions-react/admin';

function App() {
  return <Card>This is the best extension.</Card>;
}

export default reactExtension('Playground', () => <App />);
