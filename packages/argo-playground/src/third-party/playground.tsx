import React from 'react';
import {ExtensionPoint, Card} from '@shopify/argo';
import {render} from '@shopify/argo/react';

function App() {
  return (
    <Card title="Hello world" sectioned>
      From 3p code
    </Card>
  );
}

render(ExtensionPoint.Playground, () => <App />);
