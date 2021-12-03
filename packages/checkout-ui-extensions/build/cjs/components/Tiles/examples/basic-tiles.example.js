"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var tiles = root.createComponent(_checkoutUiExtensions.Tiles, undefined, [root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(_checkoutUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View')]);
  root.appendChild(tiles);
});