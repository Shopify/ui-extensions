"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var formLayout = root.createComponent(_postPurchaseUiExtensions.FormLayout, undefined, [root.createComponent(_postPurchaseUiExtensions.TextField, {
    label: 'Address',
    name: 'address',
    id: 'address'
  }), root.createComponent(_postPurchaseUiExtensions.FormLayoutGroup, undefined, [root.createComponent(_postPurchaseUiExtensions.TextField, {
    label: 'City',
    name: 'city',
    id: 'city'
  }), root.createComponent(_postPurchaseUiExtensions.TextField, {
    label: 'Postal code',
    name: 'postal',
    id: 'postal'
  })])]);
  root.appendChild(formLayout);
});