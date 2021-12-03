"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var buttonGroup = root.createComponent(_checkoutUiExtensions.ButtonGroup, undefined, [root.createComponent(_checkoutUiExtensions.Button, undefined, 'Cancel'), root.createComponent(_checkoutUiExtensions.Button, undefined, 'Submit')]);
  root.appendChild(buttonGroup);
});