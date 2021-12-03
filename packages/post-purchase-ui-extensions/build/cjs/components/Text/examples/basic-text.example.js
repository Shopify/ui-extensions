"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var text = root.createComponent(_postPurchaseUiExtensions.Text, undefined, 'Text');
  root.appendChild(text);
});