import {extend, DatePicker} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const datepicker = root.createComponent(DatePicker, {
    selected: '2021-06-01',
  });

  root.appendChild(datepicker);
});
