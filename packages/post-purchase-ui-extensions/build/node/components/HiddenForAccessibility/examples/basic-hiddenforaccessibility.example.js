"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const hiddenForA11y = root.createComponent(_postPurchaseUiExtensions.HiddenForAccessibility, undefined, 'Purely decorative content');
  root.appendChild(hiddenForA11y);
});