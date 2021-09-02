import React from 'react';
import {extend, render, Button} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <Button
      title="Settings"
      kind="primary"
      appearance="critical"
      size="large"
      inlineSize="fill"
      accessibilityLabel="open settings"
      disabled={false}
      onPress={() => console.log('Pressed')}
    />
  );
}

extend(
  'Playground',
  render(() => <App />),
);
