import React from 'react';
import {reactExtension, TextBlock} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <TextBlock size="small" variation="subdued">
      TextBlock
    </TextBlock>
  );
}

export default reactExtension('Playground', () => <App />);
