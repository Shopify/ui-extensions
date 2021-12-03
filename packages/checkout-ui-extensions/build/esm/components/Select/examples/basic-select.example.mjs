import { extend, Select } from '@shopify/checkout-ui-extensions';
extend('Checkout::Feature::Render', function (root) {
  var select = root.createComponent(Select, {
    label: 'Select',
    value: '1',
    options: [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Option 3'
    }]
  });
  root.appendChild(select);
});