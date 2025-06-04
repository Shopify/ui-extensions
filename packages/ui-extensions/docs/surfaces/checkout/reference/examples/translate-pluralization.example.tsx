/* See the locales/en.default.json tab for the translation keys and values for this example */
import {render} from 'preact';
import {useTranslate} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const translate = useTranslate();

  const points = 10000;
  const formattedPoints =
    shopify.i18n.formatNumber(points);
  // Translate the loyalty points message, using pluralization to differentiate messages
  const loyaltyPointsMsg = translate(
    'loyaltyPoints',
    {
      count: points,
      formattedPoints,
    },
  );

  return <s-banner>{loyaltyPointsMsg}</s-banner>;
}
