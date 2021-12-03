"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const resourceitem1 = root.createComponent(_adminUiExtensions.ResourceItem, {
    id: '1234',
    onPress: () => console.log('Pressed 1')
  });
  resourceitem1.appendChild('Cool item');
  const resourceitem2 = root.createComponent(_adminUiExtensions.ResourceItem, {
    id: '5678',
    onPress: () => console.log('Pressed 2')
  });
  resourceitem2.appendChild('Cooler item');
  const resourcelist = root.createComponent(_adminUiExtensions.ResourceList, {
    filterControl: {
      queryValue: '123',
      queryPlaceholder: 'Filter list',
      onQueryChange: queryValue => console.log('Filtering for', queryValue),
      onQueryClear: () => console.log('Clear value')
    }
  });
  resourcelist.appendChild(resourceitem1);
  resourcelist.appendChild(resourceitem2);
  root.appendChild(resourcelist);
  root.mount();
});