import React from 'react';
import {
  render,
  ResourceList,
  ResourceItem,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <ResourceList
      filterControl={{
        queryValue: '123',
        queryPlaceholder: 'Filter list',
        onQueryChange: (queryValue) => console.log('Filtering for', queryValue),
        onQueryClear: () => console.log('Clear value'),
      }}
    >
      <ResourceItem id="1234" onPress={() => console.log('Pressed 1')} />
      <ResourceItem id="5678" onPress={() => console.log('Pressed 2')} />
    </ResourceList>
  );
}
