import {
  extension,
  Banner,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const shipping = api.shippingAddress?.current;
    const billing = api.billingAddress?.current;

    if (!shipping || !billing) return;

    const isSameAddress =
      shipping.address1 === billing.address1 &&
      shipping.city === billing.city &&
      shipping.zip === billing.zip &&
      shipping.territoryCode === billing.territoryCode;

    const banner = root.createComponent(
      Banner,
      {status: isSameAddress ? 'info' : 'warning'},
    );
    banner.appendChild(
      root.createComponent(
        Text,
        {},
        isSameAddress
          ? 'Shipping and billing addresses match.'
          : 'Shipping and billing addresses are different.',
      ),
    );
    root.appendChild(banner);
  },
);
