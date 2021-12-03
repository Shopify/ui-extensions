"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const textfield = root.createComponent(_postPurchaseUiExtensions.TextField, {
    label: 'TextField'
  });
  root.appendChild(textfield);
});