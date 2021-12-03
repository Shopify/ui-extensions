"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const text = root.createComponent(_checkoutUiExtensions.Text, undefined, 'Text');
  root.appendChild(text);
});