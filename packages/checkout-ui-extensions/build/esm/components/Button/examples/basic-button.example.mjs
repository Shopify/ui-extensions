import { extend, Button } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var button = root.createComponent(Button, {
    // eslint-disable-next-line no-console
    onPress: function onPress() {
      return console.log('Pressed!');
    }
  }, 'Press me');
  root.appendChild(button);
});