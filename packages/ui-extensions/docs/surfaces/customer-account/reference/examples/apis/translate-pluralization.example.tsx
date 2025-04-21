/* See the locales/en.default.json tab for the translation keys and values for this example */
import {render} from 'preact';

export default function extension() {
  render(<App />, document.body);
}

function App() {
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
