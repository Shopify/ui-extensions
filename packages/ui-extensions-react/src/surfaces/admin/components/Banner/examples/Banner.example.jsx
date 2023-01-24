import React from 'react';
import {reactExtension, Banner} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Banner
      action={{
        onAction: () => console.log('Pressed the action'),
        content: 'Press me',
      }}
      status="warning"
      title="This is a warning"
      onDismiss={() => console.log('Closed')}
    >
      Here is the warning.
    </Banner>
  );
}

export default reactExtension('Playground', () => <App />);
