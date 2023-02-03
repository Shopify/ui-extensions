import React from 'react';
import {reactExtension, Card, CardSection} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Card>
      <CardSection title="Sectional">This is the best section.</CardSection>
      <CardSection title="Loveseat">No, this is the best section.</CardSection>
    </Card>
  );
}

export default reactExtension('Playground', () => <App />);
