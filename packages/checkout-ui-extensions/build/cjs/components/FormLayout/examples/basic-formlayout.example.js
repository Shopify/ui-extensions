"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var formLayout = root.createComponent(_checkoutUiExtensions.FormLayout, undefined, [root.createComponent(_checkoutUiExtensions.TextField, {
    label: 'Address',
    name: 'address',
    id: 'address'
  }), root.createComponent(_checkoutUiExtensions.FormLayoutGroup, undefined, [root.createComponent(_checkoutUiExtensions.TextField, {
    label: 'City',
    name: 'city',
    id: 'city'
  }), root.createComponent(_checkoutUiExtensions.TextField, {
    label: 'Postal code',
    name: 'postal',
    id: 'postal'
  })])]);
  root.appendChild(formLayout);
});