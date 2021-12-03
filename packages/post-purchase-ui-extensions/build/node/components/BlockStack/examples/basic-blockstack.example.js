"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const blockStack = root.createComponent(_postPurchaseUiExtensions.BlockStack, undefined, [root.createComponent(_postPurchaseUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(_postPurchaseUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(_postPurchaseUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'View')]);
  root.appendChild(blockStack);
});