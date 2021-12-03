"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Admin::Product::SubscriptionPlan::Add', function (root, api) {
  var sessionToken = api.sessionToken;
  var text = root.createText();
  sessionToken.getSessionToken().then(function (newToken) {
    text.updateText(newToken);
  });
  root.appendChild(text);
  root.mount();
});