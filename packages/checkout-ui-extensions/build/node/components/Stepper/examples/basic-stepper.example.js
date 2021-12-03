"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const stepper = root.createComponent(_checkoutUiExtensions.Stepper, {
    label: 'Stepper'
  });
  root.appendChild(stepper);
});