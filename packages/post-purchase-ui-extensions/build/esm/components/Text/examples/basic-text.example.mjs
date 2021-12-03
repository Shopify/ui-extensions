import { extend, Text } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var text = root.createComponent(Text, undefined, 'Text');
  root.appendChild(text);
});