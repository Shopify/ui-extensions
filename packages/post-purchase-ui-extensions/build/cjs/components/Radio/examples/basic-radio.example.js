"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var radio = root.createComponent(_postPurchaseUiExtensions.Radio, {
    id: 'radio',
    name: 'radio'
  }, 'I want this choice');
  root.appendChild(radio);
});