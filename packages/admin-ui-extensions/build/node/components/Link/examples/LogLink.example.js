"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const logLink = root.createComponent(_adminUiExtensions.Link, {
    onPress: () => console.log('I was pressed')
  });
  logLink.appendChild('I don’t do much.');
  root.appendChild(logLink);
  root.mount();
});