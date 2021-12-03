"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const heading = root.createComponent(_postPurchaseUiExtensions.Heading, undefined, 'Heading');
  root.appendChild(heading);
});