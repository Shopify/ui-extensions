"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var separator = root.createComponent(_postPurchaseUiExtensions.Separator);
  root.appendChild(separator);
});