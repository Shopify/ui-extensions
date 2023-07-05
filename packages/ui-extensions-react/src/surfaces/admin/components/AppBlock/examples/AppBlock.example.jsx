import React from 'react';
import {reactExtension, AppBlock} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <AppBlock title="My App Block" summary="5 items active">
      Block content
    </AppBlock>
  );
}

export default reactExtension('Playground', () => <App />);
