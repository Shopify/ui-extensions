"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var buttonGroup = root.createComponent(_postPurchaseUiExtensions.ButtonGroup, undefined, [root.createComponent(_postPurchaseUiExtensions.Button, undefined, 'Cancel'), root.createComponent(_postPurchaseUiExtensions.Button, undefined, 'Submit')]);
  root.appendChild(buttonGroup);
});