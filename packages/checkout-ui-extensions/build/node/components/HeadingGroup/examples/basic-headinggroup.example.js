"use strict";

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

(0, _checkoutUiExtensions.extend)('Checkout::Feature::Render', root => {
  const headingGroup = root.createComponent(_checkoutUiExtensions.View, undefined, [root.createComponent(_checkoutUiExtensions.Heading, undefined, 'Hi John Doe! (h1)'), root.createComponent(_checkoutUiExtensions.HeadingGroup, undefined, [root.createComponent(_checkoutUiExtensions.Heading, undefined, 'Your account (h2)'), root.createComponent(_checkoutUiExtensions.HeadingGroup, undefined, [root.createComponent(_checkoutUiExtensions.Heading, undefined, 'Change Password (h3)')])])]);
  root.appendChild(headingGroup);
});