"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Admin::Product::SubscriptionPlan::Add', function (root, api) {
  var locale = api.locale;
  var text = root.createText("My current locale is: ".concat(locale.initialValue));
  locale.setOnChange(function (newLocale) {
    text.updateText("My current locale is: ".concat(newLocale));
  });
  root.appendChild(text);
  root.mount();
});