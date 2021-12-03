"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const textContainer = root.createComponent(_checkoutUiExtensions.TextContainer, undefined, [root.createComponent(_checkoutUiExtensions.TextBlock, undefined, 'TextBlock'), root.createComponent(_checkoutUiExtensions.TextBlock, undefined, 'TextBlock'), root.createComponent(_checkoutUiExtensions.TextBlock, undefined, 'TextBlock')]);
  root.appendChild(textContainer);
});