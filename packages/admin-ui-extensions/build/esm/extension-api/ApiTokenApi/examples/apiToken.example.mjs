import { extend } from '@shopify/admin-ui-extensions';
extend('Admin::Product::SubscriptionPlan::Add', function (root, api) {
  var apiToken = api.apiToken;
  var text = root.createText();
  apiToken.getApiToken().then(function (newToken) {
    text.updateText(newToken.accessToken);
  });
  root.appendChild(text);
  root.mount();
});