import {
  extension,
  Banner,
} from '@shopify/ui-extensions/customer-account';

extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const banner = root.createComponent(
      Banner,
      {},
      api.i18n.translate('welcomeMessage'),
    );
    root.appendChild(banner);
  },
);
