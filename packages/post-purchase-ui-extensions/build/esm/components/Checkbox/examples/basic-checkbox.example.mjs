import { extend, Checkbox } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var checkbox = root.createComponent(Checkbox, {
    id: 'checkbox',
    name: 'checkbox'
  }, 'Save this information for next time');
  root.appendChild(checkbox);
});