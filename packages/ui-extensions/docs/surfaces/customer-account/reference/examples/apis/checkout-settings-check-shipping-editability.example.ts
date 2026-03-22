import {extension, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const settings = api.checkoutSettings.current;
    root.appendChild(
      root.createComponent(
        Text,
        {appearance: 'subdued'},
        settings.shippingAddress.isEditable
          ? 'The shipping address was editable at checkout.'
          : 'The shipping address was pre-set by the merchant.',
      ),
    );
  },
);
