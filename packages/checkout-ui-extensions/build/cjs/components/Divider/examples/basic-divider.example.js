"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var divider = root.createComponent(_checkoutUiExtensions.Divider);
  root.appendChild(divider);
});