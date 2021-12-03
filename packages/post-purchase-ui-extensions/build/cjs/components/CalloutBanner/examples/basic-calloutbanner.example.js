"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var calloutBanner = root.createComponent(_postPurchaseUiExtensions.CalloutBanner, {
    title: 'Special offer today only'
  }, [root.createComponent(_postPurchaseUiExtensions.Text, undefined, 'Add the Dinghy Skeleton Cruiser to your order and save 15%')]);
  root.appendChild(calloutBanner);
});