import { extend, InlineStack, View } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var inlineStack = root.createComponent(InlineStack, {
    spacing: 'base'
  }, [root.createComponent(View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(View, {
    border: 'base',
    padding: 'base'
  }, 'View'), root.createComponent(View, {
    border: 'base',
    padding: 'base'
  }, 'View')]);
  root.appendChild(inlineStack);
});