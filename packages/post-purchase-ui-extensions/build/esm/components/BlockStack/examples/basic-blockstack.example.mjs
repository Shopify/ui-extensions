import { extend, BlockStack, View } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
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