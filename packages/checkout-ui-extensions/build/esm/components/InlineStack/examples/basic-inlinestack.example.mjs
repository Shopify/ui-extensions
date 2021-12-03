import { extend, InlineStack, View } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
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