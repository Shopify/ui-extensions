"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const banner = root.createComponent(_postPurchaseUiExtensions.Banner, {
    status: 'critical',
    title: 'This is an error message'
  });
  root.appendChild(banner);
});