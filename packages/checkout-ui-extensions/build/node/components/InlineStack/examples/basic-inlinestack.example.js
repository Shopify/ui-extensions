"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const inlineStack = root.createComponent(_checkoutUiExtensions.InlineStack, {
    spacing: 'base'
  }, [root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View')]);
  root.appendChild(inlineStack);
});