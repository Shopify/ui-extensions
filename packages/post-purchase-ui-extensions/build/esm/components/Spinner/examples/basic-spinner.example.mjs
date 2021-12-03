import { extend, Spinner } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var spinner = root.createComponent(Spinner);
  root.appendChild(spinner);
});