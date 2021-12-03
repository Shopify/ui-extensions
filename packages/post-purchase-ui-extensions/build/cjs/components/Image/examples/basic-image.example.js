"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var image = root.createComponent(_postPurchaseUiExtensions.Image, {
    source: 'http://placekitten.com/300/300'
  });
  root.appendChild(image);
});