import React from 'react';
import {reactExtension, Heading} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Heading id="profile_heading" level={3}>
      Heading
    </Heading>
  );
}

export default reactExtension('Playground', () => <App />);
