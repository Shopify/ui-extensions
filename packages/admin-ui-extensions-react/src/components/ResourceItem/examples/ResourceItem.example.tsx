import React from 'react';
import {extend, render, ResourceList, ResourceItem} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <ResourceList>
      <ResourceItem id="1234" onPress={() => console.log('Pressed 1')}>
        Cool item
      </ResourceItem>
      <ResourceItem id="5678" onPress={() => console.log('Pressed 2')}>
        Cooler item
      </ResourceItem>
    </ResourceList>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
