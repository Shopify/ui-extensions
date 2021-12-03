"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {
    productId,
    variantId
  } = api.data;
  const productDataText = root.createComponent(_adminUiExtensions.Text);
  productDataText.appendChild(`
      Here is my product data:
      - product id: ${productId}
      - variant id: ${variantId}
    `);
  root.appendChild(productDataText);
  root.mount();
});