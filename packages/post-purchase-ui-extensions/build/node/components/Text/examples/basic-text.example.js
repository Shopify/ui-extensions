"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const text = root.createComponent(_postPurchaseUiExtensions.Text, undefined, 'Text');
  root.appendChild(text);
});