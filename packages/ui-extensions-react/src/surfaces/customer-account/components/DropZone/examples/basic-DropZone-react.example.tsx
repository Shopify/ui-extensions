import {
  DropZone,
  reactExtension,
} from '@shopify/ui-extensions-react/customer-account';
import React from 'react';

export default reactExtension(
  'customer-account.page.render',
  () => <App />,
);

function App() {
  return <DropZone accept="image/*" />;
}
