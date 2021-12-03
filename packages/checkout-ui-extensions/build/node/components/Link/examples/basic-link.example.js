"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const link = root.createComponent(_checkoutUiExtensions.Link, {
    to: 'https://shopify.com'
  }, 'Shopify');
  root.appendChild(link);
});