import {
  Banner,
  Link,
  extension,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (
    root,
    {i18n, authenticatedAccount, buyerIdentity},
  ) => {
    const orderStatusCustomerId =
      buyerIdentity?.customer?.current?.id;

    const authenticatedCustomerId =
      authenticatedAccount?.customer?.current?.id;

    if (
      authenticatedCustomerId &&
      orderStatusCustomerId?.endsWith(
        authenticatedCustomerId,
      )
    ) {
      const link = root.createComponent(
        Link,
        {
          to: 'extension:manageLoyaltyPoints/',
        },
        i18n.translate('manageLoyaltyPoints'),
      );
      const app = root.createComponent(
        Banner,
        {},
        link,
      );
      root.appendChild(app);
    }
  },
);
