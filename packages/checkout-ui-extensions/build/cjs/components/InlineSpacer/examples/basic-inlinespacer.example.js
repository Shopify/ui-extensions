"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var inlineSpacer = root.createComponent(_checkoutUiExtensions.InlineStack, undefined, [root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(_checkoutUiExtensions.InlineSpacer, {
    size: 'large'
  }), root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(_checkoutUiExtensions.InlineSpacer, {
    size: 'small'
  }), root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View')]);
  root.appendChild(inlineSpacer);
});