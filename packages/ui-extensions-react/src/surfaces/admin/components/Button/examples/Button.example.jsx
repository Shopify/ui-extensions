import React from 'react';
import {reactExtension, Button} from '@shopify/ui-extensions-react/admin';

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

export default reactExtension('Playground', () => <App />);
