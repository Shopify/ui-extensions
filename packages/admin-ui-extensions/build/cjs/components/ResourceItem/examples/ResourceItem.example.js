"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var resourceItem1 = root.createComponent(_adminUiExtensions.ResourceItem, {
    id: '1234',
    onPress: function onPress() {
      return console.log('Pressed 1');
    }
  });
  resourceItem1.appendChild('Cool item');
  var resourceItem2 = root.createComponent(_adminUiExtensions.ResourceItem, {
    id: '5678',
    onPress: function onPress() {
      return console.log('Pressed 2');
    }
  });
  resourceItem2.appendChild('Cooler item');
  var resourceList = root.createComponent(_adminUiExtensions.ResourceList, {});
  resourceList.appendChild(resourceItem1);
  resourceList.appendChild(resourceItem2);
  root.appendChild(resourceList);
  root.mount();
});