import React from 'react';
import {reactExtension, Icon} from '@shopify/ui-extensions-react/admin';

function App() {
  return <Icon source="cancelSmallMinor" />;
}

export default reactExtension('Playground', () => <App />);
