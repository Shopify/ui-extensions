"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var blockSpacer = root.createComponent(_checkoutUiExtensions.View, undefined, [root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(_checkoutUiExtensions.BlockSpacer), root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View')]);
  root.appendChild(blockSpacer);
});