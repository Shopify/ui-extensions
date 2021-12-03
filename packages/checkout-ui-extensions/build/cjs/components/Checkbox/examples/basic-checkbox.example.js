"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var checkbox = root.createComponent(_checkoutUiExtensions.Checkbox, {
    id: 'checkbox',
    name: 'checkbox'
  }, 'Save this information for next time');
  root.appendChild(checkbox);
});