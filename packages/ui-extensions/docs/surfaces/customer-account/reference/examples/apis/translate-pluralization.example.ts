/* See the locales/en.default.json tab for the translation keys and values for this example */
export default async () => {
  const points = 10000;
  const formattedPoints =
    shopify.i18n.formatNumber(points);

  // Translate the loyalty points message, using pluralization to differentiate messages
  const loyaltyPointsMsg = shopify.i18n.translate(
    'loyaltyPoints',
    {
      count: points,
      formattedPoints,
    },
  );

  const banner =
    document.createElement('s-banner');
  banner.textContent = loyaltyPointsMsg;

  document.body.append(banner);
}
