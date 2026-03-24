import {
  extension,
  Banner,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const metafields = api.metafields.current;
    const loyaltyPoints = metafields.find(
      (m) => m.namespace === 'loyalty' && m.key === 'points_earned',
    );

    if (!loyaltyPoints) return;

    const banner = root.createComponent(Banner, {status: 'success'});
    banner.appendChild(
      root.createComponent(
        Text,
        {},
        `You earned ${loyaltyPoints.value} loyalty points on this order!`,
      ),
    );
    root.appendChild(banner);
  },
);
