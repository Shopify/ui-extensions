import React from 'react';
import {
  reactExtension,
  Section,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Section heading="Section heading">
      Section content
    </Section>
  );
}

export default reactExtension(
  'Playground',
  () => <App />,
);
