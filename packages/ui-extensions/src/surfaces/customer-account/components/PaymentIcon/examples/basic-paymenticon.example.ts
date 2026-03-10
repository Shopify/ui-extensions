import {extension, PaymentIcon} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const paymentIcon = root.createComponent(PaymentIcon, {name: 'shop-pay'});

  root.appendChild(paymentIcon);
});
