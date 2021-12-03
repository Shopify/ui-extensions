"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Admin::Product::SubscriptionPlan::Add', function (root, api) {
  var toast = api.toast;
  var button = root.createComponent(_adminUiExtensions.Button, {
    title: 'Pop toast',
    primary: true,
    onPress: function onPress() {
      return toast.show('Toast popped!');
    }
  });
  root.appendChild(button);
  var errorButton = root.createComponent(_adminUiExtensions.Button, {
    title: 'Do something',
    onPress: function onPress() {
      return toast.show('That didn’t work.', {
        error: true
      });
    }
  });
  root.appendChild(errorButton);
  root.mount();
});