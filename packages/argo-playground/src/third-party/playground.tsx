import React from 'react';
import {render, ExtensionPoint, Card} from '@shopify/argo-admin-react';

function App() {
  return (
    <Card title="Hello world" sectioned>
      From 3p code
    </Card>
  );
}

render(ExtensionPoint.Playground, () => <App />);
