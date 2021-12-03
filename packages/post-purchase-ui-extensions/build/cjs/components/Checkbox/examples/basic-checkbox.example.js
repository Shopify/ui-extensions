"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var checkbox = root.createComponent(_postPurchaseUiExtensions.Checkbox, {
    id: 'checkbox',
    name: 'checkbox'
  }, 'Save this information for next time');
  root.appendChild(checkbox);
});