import { extend, ResourceList, ResourceItem } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var resourceitem1 = root.createComponent(ResourceItem, {
    id: '1234',
    onPress: function onPress() {
      return console.log('Pressed 1');
    }
  });
  resourceitem1.appendChild('Cool item');
  var resourceitem2 = root.createComponent(ResourceItem, {
    id: '5678',
    onPress: function onPress() {
      return console.log('Pressed 2');
    }
  });
  resourceitem2.appendChild('Cooler item');
  var resourcelist = root.createComponent(ResourceList, {
    filterControl: {
      queryValue: '123',
      queryPlaceholder: 'Filter list',
      onQueryChange: function onQueryChange(queryValue) {
        return console.log('Filtering for', queryValue);
      },
      onQueryClear: function onQueryClear() {
        return console.log('Clear value');
      }
    }
  });
  resourcelist.appendChild(resourceitem1);
  resourcelist.appendChild(resourceitem2);
  root.appendChild(resourcelist);
  root.mount();
});