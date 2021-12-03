"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {
    locale
  } = api;
  const text = root.createText(`My current locale is: ${locale.initialValue}`);
  locale.setOnChange(newLocale => {
    text.updateText(`My current locale is: ${newLocale}`);
  });
  root.appendChild(text);
  root.mount();
});