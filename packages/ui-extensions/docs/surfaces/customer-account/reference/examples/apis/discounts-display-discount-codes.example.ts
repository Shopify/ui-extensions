import {
  extension,
  Banner,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const discountCodes = api.discountCodes.current;

    if (discountCodes.length === 0) return;

    const banner = root.createComponent(
      Banner,
      {status: 'success', title: 'Discounts applied'},
    );
    for (const discount of discountCodes) {
      banner.appendChild(
        root.createComponent(Text, {}, `Code: ${discount.code}`),
      );
    }
    root.appendChild(banner);
  },
);
