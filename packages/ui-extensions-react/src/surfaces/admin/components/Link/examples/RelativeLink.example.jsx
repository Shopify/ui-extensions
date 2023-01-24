import React from 'react';
import {reactExtension, Link} from '@shopify/ui-extensions-react/admin';

function App() {
  return <Link url="/admin/products/12345">View product</Link>;
}

export default reactExtension('Playground', () => <App />);
