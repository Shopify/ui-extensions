"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', function (root) {
  var choiceList = root.createComponent(_checkoutUiExtensions.ChoiceList, {
    name: 'Choice',
    value: 'first',
    // eslint-disable-next-line no-console
    onChange: function onChange() {
      return console.log('onChange Triggered');
    }
  }, [root.createComponent(_checkoutUiExtensions.BlockStack, undefined, [root.createComponent(_checkoutUiExtensions.Choice, {
    id: 'first'
  }, 'First choice'), root.createComponent(_checkoutUiExtensions.Choice, {
    id: 'second'
  }, 'Second choice')])]);
  root.appendChild(choiceList);
});