"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var logLink = root.createComponent(_adminUiExtensions.Link, {
    onPress: function onPress() {
      return console.log('I was pressed');
    }
  });
  logLink.appendChild('I don’t do much.');
  root.appendChild(logLink);
  root.mount();
});