/* See the locales/en.default.json tab for the translation keys and values for this example */
import React from 'react';
import {
  reactExtension,
  Banner,
  useApi,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';

reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  const {i18n} = useApi();
  const translate = useTranslate();

  const points = 10000;
  const formattedPoints =
    i18n.formatNumber(points);
  // Translate the loyalty points message, using pluralization to differentiate messages
  const loyaltyPointsMsg = translate(
    'loyaltyPoints',
    {
      count: points,
      formattedPoints,
    },
  );

  return <Banner title={loyaltyPointsMsg} />;
}
