"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const tag = root.createComponent(_checkoutUiExtensions.Tag, {}, 'BOGO');
  root.appendChild(tag);
});