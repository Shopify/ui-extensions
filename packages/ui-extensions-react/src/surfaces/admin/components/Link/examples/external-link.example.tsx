import React from 'react';
import {
  reactExtension,
  Link,
} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Link href="https://www.shopify.ca/climate/sustainability-fund">
      Sustainability fund
    </Link>
  );
}

export default reactExtension(
  'Playground',
  () => <App />,
);
