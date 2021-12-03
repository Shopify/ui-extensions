"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Admin::Product::SubscriptionPlan::Add', function (root, api) {
  var _api$data = api.data,
      productId = _api$data.productId,
      variantId = _api$data.variantId;
  var productDataText = root.createComponent(_adminUiExtensions.Text);
  productDataText.appendChild("\n      Here is my product data:\n      - product id: ".concat(productId, "\n      - variant id: ").concat(variantId, "\n    "));
  root.appendChild(productDataText);
  root.mount();
});