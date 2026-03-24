import {
  extension,
  Banner,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, {i18n}) => {
    const points = 10000;
    const formattedPoints =
      i18n.formatNumber(points);
    // Translate the loyalty points message, using pluralization to differentiate messages
    const loyaltyPointsMsg = i18n.translate(
      'loyaltyPoints',
      {
        count: points,
        formattedPoints,
      },
    );

    const app = root.createComponent(Banner, {
      title: loyaltyPointsMsg,
    });

    root.appendChild(app);
  },
);
