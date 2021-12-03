"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var calloutBanner = root.createComponent(_checkoutUiExtensions.CalloutBanner, {
    title: 'Special offer today only'
  }, [root.createComponent(_checkoutUiExtensions.Text, undefined, 'Add the Dinghy Skeleton Cruiser to your order and save 15%')]);
  root.appendChild(calloutBanner);
});