import React from 'react';
import {
  render,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <BlockStack gap="4">
      <>Child 1</>
      <>Child 2</>
      <>Child 3</>
      <>Child 4</>
    </BlockStack>
  );
}
