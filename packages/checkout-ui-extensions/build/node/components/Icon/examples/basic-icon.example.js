"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const icon = root.createComponent(_checkoutUiExtensions.Icon, {
    source: 'discount'
  });
  root.appendChild(icon);
});