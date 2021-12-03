import React from 'react';
import {extend, render, Banner} from '@shopify/admin-ui-extensions-react';

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

extend(
  'Playground',
  render(() => <App />),
);
