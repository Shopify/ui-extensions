import React from 'react';
import {extend, render, ExtensionPoint, Card} from '@shopify/argo-admin-react';

function App() {
  return (
    <Card title="Hello world" sectioned>
      From 3p code
    </Card>
  );
}

extend(
  ExtensionPoint.Playground,
  render(() => <App />),
);
