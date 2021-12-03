"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var button = root.createComponent(_postPurchaseUiExtensions.Button, {
    // eslint-disable-next-line no-console
    onPress: function onPress() {
      return console.log('Pressed!');
    }
  }, 'Press me');
  root.appendChild(button);
});