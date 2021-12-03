"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const textBlock = root.createComponent(_checkoutUiExtensions.TextBlock, undefined, 'Textblock');
  root.appendChild(textBlock);
});