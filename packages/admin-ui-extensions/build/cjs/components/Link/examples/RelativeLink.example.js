"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var productLink = root.createComponent(_adminUiExtensions.Link, {
    url: '/admin/products/12345'
  });
  productLink.appendChild('View product');
  root.appendChild(productLink);
  root.mount();
});