"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const textContainer = root.createComponent(_postPurchaseUiExtensions.TextContainer, undefined, [root.createComponent(_postPurchaseUiExtensions.TextBlock, undefined, 'TextBlock'), root.createComponent(_postPurchaseUiExtensions.TextBlock, undefined, 'TextBlock'), root.createComponent(_postPurchaseUiExtensions.TextBlock, undefined, 'TextBlock')]);
  root.appendChild(textContainer);
});