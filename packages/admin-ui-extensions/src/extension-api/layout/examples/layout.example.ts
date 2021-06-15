import {extend, Text} from '@shopify/admin-ui-extensions';

extend('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {layout} = api;
  const currentLayoutText = root.createText(`The current layout is: ${layout.initialValue.horizontal}`);

  layout.setOnChange((newLayout) => {
    currentLayoutText.updateText(`The current layout is: ${newLayout.horizontal}`)
  });

  root.appendChild(currentLayoutText);
  root.mount();
});
