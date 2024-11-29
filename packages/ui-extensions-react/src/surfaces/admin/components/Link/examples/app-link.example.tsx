import React from 'react';
import {
  reactExtension,
  Link,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Link href="app:bar">Link to app path</Link>
  );
}

export default reactExtension(
  'Playground',
  () => <App />,
);
