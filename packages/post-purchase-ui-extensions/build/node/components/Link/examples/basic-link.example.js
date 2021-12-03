"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const link = root.createComponent(_postPurchaseUiExtensions.Link, {
    to: 'https://shopify.com'
  }, 'Shopify');
  root.appendChild(link);
});