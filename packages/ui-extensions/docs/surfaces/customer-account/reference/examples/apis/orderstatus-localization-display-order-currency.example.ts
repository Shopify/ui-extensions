import {
  extension,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const currency = api.localization.currency.current;

    root.appendChild(
      root.createComponent(
        Text,
        {},
        `Order currency: ${currency.isoCode}`,
      ),
    );
  },
);
