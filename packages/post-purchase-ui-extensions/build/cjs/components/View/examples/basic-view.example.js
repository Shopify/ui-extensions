"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var view = root.createComponent(_postPurchaseUiExtensions.View, undefined, 'View');
  root.appendChild(view);
});