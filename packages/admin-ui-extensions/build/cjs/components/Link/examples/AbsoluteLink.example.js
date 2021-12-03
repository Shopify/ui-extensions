"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var link = root.createComponent(_adminUiExtensions.Link, {
    url: 'https://shopify.com',
    external: true
  });
  link.appendChild('The best product ever!');
  root.appendChild(link);
  root.mount();
});