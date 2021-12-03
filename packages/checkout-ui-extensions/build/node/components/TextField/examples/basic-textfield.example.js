"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const textfield = root.createComponent(_checkoutUiExtensions.TextField, {
    label: 'TextField'
  });
  root.appendChild(textfield);
});