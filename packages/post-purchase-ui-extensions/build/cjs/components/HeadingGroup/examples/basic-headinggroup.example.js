"use strict";

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

(0, _postPurchaseUiExtensions.extend)('Checkout::PostPurchase::Render', function (root) {
  var headingGroup = root.createComponent(_postPurchaseUiExtensions.View, undefined, [root.createComponent(_postPurchaseUiExtensions.Heading, undefined, 'Hi John Doe! (h1)'), root.createComponent(_postPurchaseUiExtensions.HeadingGroup, undefined, [root.createComponent(_postPurchaseUiExtensions.Heading, undefined, 'Your account (h2)'), root.createComponent(_postPurchaseUiExtensions.HeadingGroup, undefined, [root.createComponent(_postPurchaseUiExtensions.Heading, undefined, 'Change Password (h3)')])])]);
  root.appendChild(headingGroup);
});