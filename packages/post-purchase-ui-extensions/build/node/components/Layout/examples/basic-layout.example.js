"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', root => {
  const layout = root.createComponent(_postPurchaseUiExtensions.Layout, {
    spacing: 'base',
    sizes: [1, 0.2, 0.8, 1]
  }, [root.createComponent(_postPurchaseUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'Header'), root.createComponent(_postPurchaseUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'Sidebar'), root.createComponent(_postPurchaseUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'Content'), root.createComponent(_postPurchaseUiExtensions.View, {
    border: 'base',
    padding: 'base'
  }, 'Footer')]);
  root.appendChild(layout);
});