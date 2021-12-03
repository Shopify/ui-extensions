import { extend, Separator } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var separator = root.createComponent(Separator);
  root.appendChild(separator);
});