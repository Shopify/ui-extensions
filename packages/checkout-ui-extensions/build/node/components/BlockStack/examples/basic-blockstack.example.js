"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const blockStack = root.createComponent(_checkoutUiExtensions.BlockStack, undefined, [root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View')]);
  root.appendChild(blockStack);
});