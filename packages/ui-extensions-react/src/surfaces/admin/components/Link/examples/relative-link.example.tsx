import React from 'react';
import {
  reactExtension,
  Link,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Link href="/baz">
      Link relative to current path
    </Link>
  );
}

export default reactExtension(
  'Playground',
  () => <App />,
);
