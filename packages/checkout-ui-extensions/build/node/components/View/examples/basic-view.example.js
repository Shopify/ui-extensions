"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const view = root.createComponent(_checkoutUiExtensions.View, undefined, 'View');
  root.appendChild(view);
});