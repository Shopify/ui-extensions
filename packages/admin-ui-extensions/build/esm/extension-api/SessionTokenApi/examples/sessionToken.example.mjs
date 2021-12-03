import { extend } from '@shopify/admin-ui-extensions';
extend('Admin::Product::SubscriptionPlan::Add', function (root, api) {
  var sessionToken = api.sessionToken;
  var text = root.createText();
  sessionToken.getSessionToken().then(function (newToken) {
    text.updateText(newToken);
  });
  root.appendChild(text);
  root.mount();
});