"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var spinner = root.createComponent(_checkoutUiExtensions.Spinner);
  root.appendChild(spinner);
});