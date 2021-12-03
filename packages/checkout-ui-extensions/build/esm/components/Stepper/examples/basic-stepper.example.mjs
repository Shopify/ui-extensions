import { extend, Stepper } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var stepper = root.createComponent(Stepper, {
    label: 'Stepper'
  });
  root.appendChild(stepper);
});