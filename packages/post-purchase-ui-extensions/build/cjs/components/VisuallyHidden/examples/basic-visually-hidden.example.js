"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var visuallyHidden = root.createComponent(_postPurchaseUiExtensions.VisuallyHidden, undefined, 'Visually hidden content although available to assistive technology');
  root.appendChild(visuallyHidden);
});