import React from 'react';
import {reactExtension, Badge} from '@shopify/ui-extensions-react/admin';

function App() {
  return <Badge message="Example message" status="success" />;
}

export default reactExtension('Playground', () => <App />);
