import React from 'react';
import {extend, render, Card, CardSection} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <Card>
      <CardSection title="Sectional">This is the best section.</CardSection>
      <CardSection title="Loveseat">No, this is the best section.</CardSection>
    </Card>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
