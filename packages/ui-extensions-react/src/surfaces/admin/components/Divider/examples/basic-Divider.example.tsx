import React from 'react';
import {
  render,
  Divider,
  VerticalStack,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <VerticalStack gap="3">
      <>First text</>
      <Divider />
      <>Second Text</>
    </VerticalStack>
  );
}
