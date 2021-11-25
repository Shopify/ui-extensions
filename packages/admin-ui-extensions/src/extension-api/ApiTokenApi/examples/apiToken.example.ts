import {extend} from '@shopify/admin-ui-extensions';

extend('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {apiToken} = api;
  const text = root.createText();

  apiToken.getApiToken().then((newToken) => {
    text.updateText(newToken.accessToken);
  });

  root.appendChild(text);
  root.mount();
});
