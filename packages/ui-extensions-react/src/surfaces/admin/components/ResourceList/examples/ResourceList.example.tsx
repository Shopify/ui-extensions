import React from 'react';
import {reactExtension, ResourceList, ResourceItem} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <ResourceList
      filterControl={{
        queryValue: '123',
        queryPlaceholder: 'Filter list',
        onQueryChange: (queryValue) => console.log('Filtering for', queryValue),
        onQueryClear: () => console.log('Clear filters'),
      }}
    >
      <ResourceItem id="1234" onPress={() => console.log('Pressed 1')}>
        Cool item
      </ResourceItem>
      <ResourceItem id="5678" onPress={() => console.log('Pressed 2')}>
        Cooler item
      </ResourceItem>
    </ResourceList>
  );
}

export default reactExtension('Playground', () => <App />);
