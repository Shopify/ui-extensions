"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var image = root.createComponent(_checkoutUiExtensions.Image, {
    source: 'http://placekitten.com/300/300'
  });
  root.appendChild(image);
});