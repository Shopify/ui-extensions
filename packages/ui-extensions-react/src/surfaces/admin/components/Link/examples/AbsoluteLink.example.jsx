import React from 'react';
import {reactExtension, Link} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Link url="https://shopify.com" external>
      The best product ever!
    </Link>
  );
}

export default reactExtension('Playground', () => <App />);
