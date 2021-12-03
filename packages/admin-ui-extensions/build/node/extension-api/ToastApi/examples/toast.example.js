"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {
    toast
  } = api;
  const button = root.createComponent(_adminUiExtensions.Button, {
    title: 'Pop toast',
    primary: true,
    onPress: () => toast.show('Toast popped!')
  });
  root.appendChild(button);
  const errorButton = root.createComponent(_adminUiExtensions.Button, {
    title: 'Do something',
    onPress: () => toast.show('That didn’t work.', {
      error: true
    })
  });
  root.appendChild(errorButton);
  root.mount();
});