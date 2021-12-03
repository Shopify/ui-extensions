import { extend } from '@shopify/admin-ui-extensions';
extend('Admin::Product::SubscriptionPlan::Add', function (root, api) {
  var layout = api.layout;
  var currentLayoutText = root.createText("The current layout is: ".concat(layout.initialValue.horizontal));
  layout.setOnChange(function (newLayout) {
    currentLayoutText.updateText("The current layout is: ".concat(newLayout.horizontal));
  });
  root.appendChild(currentLayoutText);
  root.mount();
});