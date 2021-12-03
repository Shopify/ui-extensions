"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const button = root.createComponent(_checkoutUiExtensions.Button, {
    // eslint-disable-next-line no-console
    onPress: () => console.log('Pressed!')
  }, 'Press me');
  root.appendChild(button);
});