import {extension, PaymentIcon} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const paymentIcon = root.createComponent(PaymentIcon, {type: 'shop-pay'});

  root.appendChild(paymentIcon);
});
