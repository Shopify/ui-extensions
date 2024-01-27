import React from 'react';
import {reactExtension, TextArea} from '@shopify/ui-extensions-react/point-of-sale';

function App() {
  return <TextArea label="Label" rows={4} />;
}

reactExtension('Playground', () => <App />);