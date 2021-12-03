"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const bookend = root.createComponent(_postPurchaseUiExtensions.Bookend, {
    trailing: true
  }, [root.createComponent(_postPurchaseUiExtensions.TextField, {
    label: 'Discount'
  }), root.createComponent(_postPurchaseUiExtensions.Button, {
    plain: true
  }, 'Apply')]);
  root.appendChild(bookend);
});