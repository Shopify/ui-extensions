"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var view = root.createComponent(_checkoutUiExtensions.View, undefined, 'View');
  root.appendChild(view);
});