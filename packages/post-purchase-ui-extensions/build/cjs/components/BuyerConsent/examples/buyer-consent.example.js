"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var button = root.createComponent(_postPurchaseUiExtensions.BuyerConsent, {
    // eslint-disable-next-line no-console
    onChange: function onChange(value) {
      return console.log(value);
    },
    policy: 'subscriptions',
    checked: false
  });
  root.appendChild(button);
});