import React from 'react';
import {
  reactExtension,
  Link,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Link href="shopify://admin/orders">
      Shop's orders
    </Link>
  );
}

export default reactExtension(
  'Playground',
  () => <App />,
);
