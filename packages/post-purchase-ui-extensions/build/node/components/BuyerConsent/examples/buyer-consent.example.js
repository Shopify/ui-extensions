"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const button = root.createComponent(_postPurchaseUiExtensions.BuyerConsent, {
    // eslint-disable-next-line no-console
    onChange: value => console.log(value),
    policy: 'subscriptions',
    checked: false
  });
  root.appendChild(button);
});