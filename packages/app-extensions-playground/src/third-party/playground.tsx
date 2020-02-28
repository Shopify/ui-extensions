import React from 'react';
import {render, ExtensionPoint} from '@shopify/app-extensions-renderer';
import {Card} from '@shopify/app-extensions-polaris-components/client';

render(ExtensionPoint.AppLink, () => <App />);

function App() {
  return (
    <Card title="Hello world" sectioned>
      From 3p code
    </Card>
  );
}
