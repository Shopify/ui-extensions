"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var button = root.createComponent(_checkoutUiExtensions.Button, {
    // eslint-disable-next-line no-console
    onPress: function onPress() {
      return console.log('Pressed!');
    }
  }, 'Press me');
  root.appendChild(button);
});