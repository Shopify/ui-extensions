"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var textBlock = root.createComponent(_postPurchaseUiExtensions.TextBlock, undefined, 'Textblock');
  root.appendChild(textBlock);
});