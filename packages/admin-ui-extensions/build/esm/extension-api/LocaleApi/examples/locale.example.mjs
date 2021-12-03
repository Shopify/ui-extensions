import { extend } from '@shopify/admin-ui-extensions';
extend('Admin::Product::SubscriptionPlan::Add', function (root, api) {
  var locale = api.locale;
  var text = root.createText("My current locale is: ".concat(locale.initialValue));
  locale.setOnChange(function (newLocale) {
    text.updateText("My current locale is: ".concat(newLocale));
  });
  root.appendChild(text);
  root.mount();
});