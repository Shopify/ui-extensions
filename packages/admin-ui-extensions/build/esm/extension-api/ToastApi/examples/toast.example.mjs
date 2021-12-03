import { extend, Button } from '@shopify/admin-ui-extensions';
extend('Admin::Product::SubscriptionPlan::Add', function (root, api) {
  var toast = api.toast;
  var button = root.createComponent(Button, {
    title: 'Pop toast',
    primary: true,
    onPress: function onPress() {
      return toast.show('Toast popped!');
    }
  });
  root.appendChild(button);
  var errorButton = root.createComponent(Button, {
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