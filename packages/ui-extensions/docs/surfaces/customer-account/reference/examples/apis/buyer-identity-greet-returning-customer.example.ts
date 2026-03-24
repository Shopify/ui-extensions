import {extension, Banner, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const customer = api.buyerIdentity?.customer.current;
    if (!customer?.firstName) return;
    const banner = root.createComponent(Banner, {status: 'info'});
    banner.appendChild(root.createComponent(Text, {}, `Thanks for your order, ${customer.firstName}!`));
    root.appendChild(banner);
  },
);
