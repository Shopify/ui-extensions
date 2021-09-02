import React from 'react';
import {extend, render, Button} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <Button
      title="Settings"
      kind="secondary"
      appearance="monochrome"
      size="large"
      inlineSize="fill"
      accessibilityLabel="open settings"
      disabled={false}
      onPress={() => console.log('Pressed')}
    >
      Settings
    </Button>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
