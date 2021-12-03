"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var list = root.createComponent(_checkoutUiExtensions.List, undefined, [root.createComponent(_checkoutUiExtensions.ListItem, undefined, 'ListItem'), root.createComponent(_checkoutUiExtensions.ListItem, undefined, 'ListItem'), root.createComponent(_checkoutUiExtensions.ListItem, undefined, 'ListItem')]);
  root.appendChild(list);
});