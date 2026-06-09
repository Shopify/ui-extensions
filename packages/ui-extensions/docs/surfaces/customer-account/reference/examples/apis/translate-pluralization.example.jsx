import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
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

  return <s-banner>{loyaltyPointsMsg}</s-banner>;
}
