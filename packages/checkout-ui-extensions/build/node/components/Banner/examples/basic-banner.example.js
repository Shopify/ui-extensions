"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const banner = root.createComponent(_checkoutUiExtensions.Banner, {
    status: 'critical',
    title: 'This is an error message'
  });
  root.appendChild(banner);
});