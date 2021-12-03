import { extend, TextBlock } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var textBlock = root.createComponent(TextBlock, undefined, 'Textblock');
  root.appendChild(textBlock);
});