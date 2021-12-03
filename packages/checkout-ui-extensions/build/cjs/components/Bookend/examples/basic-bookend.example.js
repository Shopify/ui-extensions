"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var bookend = root.createComponent(_checkoutUiExtensions.Bookend, {
    trailing: true
  }, [root.createComponent(_checkoutUiExtensions.TextField, {
    label: 'Discount'
  }), root.createComponent(_checkoutUiExtensions.Button, {
    plain: true
  }, 'Apply')]);
  root.appendChild(bookend);
});