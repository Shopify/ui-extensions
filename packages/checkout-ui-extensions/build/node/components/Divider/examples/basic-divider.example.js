"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const divider = root.createComponent(_checkoutUiExtensions.Divider);
  root.appendChild(divider);
});