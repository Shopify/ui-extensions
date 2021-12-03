import { extend, BlockStack, View } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var blockStack = root.createComponent(BlockStack, undefined, [root.createComponent(View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(View, {
    border: 'base',
    padding: 'base'
  }, 'View')]);
  root.appendChild(blockStack);
});