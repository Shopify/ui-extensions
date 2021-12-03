import { extend, Tag } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var tag = root.createComponent(Tag, {}, 'BOGO');
  root.appendChild(tag);
});