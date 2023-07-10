import React from 'react';
import {reactExtension, AppAction, Button} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <AppAction
        title="My App Action"
        primaryAction={<Button onPress={() => {}}>Action</Button>}
        secondaryAction={<Button onPress={() => {}}>Secondary</Button>}
    >
        Modal content
    </AppAction>
  );
}

export default reactExtension('Playground', () => <App />);
