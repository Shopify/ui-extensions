import React from 'react';
import {reactExtension, AdminAction, Button} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <AdminAction
        title="My App Action"
        primaryAction={<Button onPress={() => {}}>Action</Button>}
        secondaryAction={<Button onPress={() => {}}>Secondary</Button>}
    >
        Modal content
    </AdminAction>
  );
}

export default reactExtension('Playground', () => <App />);
