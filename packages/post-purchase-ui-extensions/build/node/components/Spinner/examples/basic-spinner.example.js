"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const spinner = root.createComponent(_postPurchaseUiExtensions.Spinner);
  root.appendChild(spinner);
});