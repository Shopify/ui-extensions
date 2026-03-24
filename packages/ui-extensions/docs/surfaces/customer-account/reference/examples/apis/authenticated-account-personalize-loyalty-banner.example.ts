import {extension, Banner, Link} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const authenticatedCustomer = api.authenticatedAccount.customer.current;
    const orderStatusCustomer = api.buyerIdentity?.customer.current;

    if (
      authenticatedCustomer?.id &&
      orderStatusCustomer?.id?.endsWith(authenticatedCustomer?.id)
    ) {
      const banner = root.createComponent(Banner, {});
      banner.appendChild(
        root.createComponent(Link, {to: 'extension:manageLoyaltyPoints/'}, api.i18n.translate('manageLoyaltyPoints')),
      );
      root.appendChild(banner);
    }
  },
);
