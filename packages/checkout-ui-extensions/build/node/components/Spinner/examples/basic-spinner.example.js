"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const spinner = root.createComponent(_checkoutUiExtensions.Spinner);
  root.appendChild(spinner);
});