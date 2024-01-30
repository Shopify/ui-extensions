import {extend, ResourceList, ResourceItem} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const resourceitem1 = root.createComponent(ResourceItem, {
    id: '1234',
    onPress: () => console.log('Pressed 1'),
  });
  resourceitem1.appendChild('Cool item');
  const resourceitem2 = root.createComponent(ResourceItem, {
    id: '5678',
    onPress: () => console.log('Pressed 2'),
  });
  resourceitem2.appendChild('Cooler item');

  const resourcelist = root.createComponent(ResourceList, {
    filterControl: {
      queryValue: '123',
      queryPlaceholder: 'Filter list',
      onQueryChange: (queryValue) => console.log('Filtering for', queryValue),
      onQueryClear: () => console.log('Clear value'),
    },
  });

  resourcelist.appendChild(resourceitem1);
  resourcelist.appendChild(resourceitem2);

  root.appendChild(resourcelist);
  root.mount();
});