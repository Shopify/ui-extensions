import { extend, Icon } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var icon = root.createComponent(Icon, {
    source: 'discount'
  });
  root.appendChild(icon);
});