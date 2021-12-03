"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const heading = root.createComponent(_checkoutUiExtensions.Heading, undefined, 'Heading');
  root.appendChild(heading);
});