"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {
    apiToken
  } = api;
  const text = root.createText();
  apiToken.getApiToken().then(newToken => {
    text.updateText(newToken.accessToken);
  });
  root.appendChild(text);
  root.mount();
});