import {extension, DatePicker} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const datepicker = root.createComponent(DatePicker, {
    selected: '2021-06-01',
  });

  root.appendChild(datepicker);
});
