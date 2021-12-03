"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var thumbnail = root.createComponent(_adminUiExtensions.Thumbnail, {
    size: 'small',
    scaleType: 'fit',
    source: 'https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png',
    alt: 'Shopify'
  });
  root.appendChild(thumbnail);
  root.mount();
});