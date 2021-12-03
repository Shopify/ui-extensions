"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var badge = root.createComponent(_adminUiExtensions.Badge, {
    message: 'Example message',
    status: 'success'
  });
  root.appendChild(badge);
  root.mount();
});