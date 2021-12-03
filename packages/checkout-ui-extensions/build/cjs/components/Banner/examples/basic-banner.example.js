"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var banner = root.createComponent(_checkoutUiExtensions.Banner, {
    status: 'critical',
    title: 'This is an error message'
  });
  root.appendChild(banner);
});