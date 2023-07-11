import {extension, DatePicker} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const datepicker = root.createComponent(DatePicker, {
    selected: '2021-06-01',
  });

  root.appendChild(datepicker);
});
