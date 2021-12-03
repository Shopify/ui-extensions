import { extend, Text } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var text = root.createComponent(Text, undefined, 'Text');
  root.appendChild(text);
});