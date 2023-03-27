/* See the locales/en.default.json tab for the translation keys and values for this example */
import React from 'react';
import {
  render,
  Banner,
  useExtensionApi,
  useTranslate,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <App />
));

function App() {
  const {i18n} = useExtensionApi();
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
