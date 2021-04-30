import {extend} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {sessionToken} = api;
  const text = root.createText();

  sessionToken.getSessionToken().then((newToken) => {
    text.updateText(newToken);
  });

  root.appendChild(text);
  root.mount();
});