import { extend, Radio } from '@shopify/post-purchase-ui-extensions';
extend('Checkout::PostPurchase::Render', function (root) {
  var radio = root.createComponent(Radio, {
    id: 'radio',
    name: 'radio'
  }, 'I want this choice');
  root.appendChild(radio);
});