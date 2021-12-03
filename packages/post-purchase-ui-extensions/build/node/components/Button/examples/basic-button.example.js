"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const button = root.createComponent(_postPurchaseUiExtensions.Button, {
    // eslint-disable-next-line no-console
    onPress: () => console.log('Pressed!')
  }, 'Press me');
  root.appendChild(button);
});