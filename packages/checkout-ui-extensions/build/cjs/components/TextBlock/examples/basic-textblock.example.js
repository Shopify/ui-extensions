"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var textBlock = root.createComponent(_checkoutUiExtensions.TextBlock, undefined, 'Textblock');
  root.appendChild(textBlock);
});