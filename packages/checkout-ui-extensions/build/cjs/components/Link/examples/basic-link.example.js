"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var link = root.createComponent(_checkoutUiExtensions.Link, {
    to: 'https://shopify.com'
  }, 'Shopify');
  root.appendChild(link);
});