import { extend, View } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var view = root.createComponent(View, undefined, 'View');
  root.appendChild(view);
});