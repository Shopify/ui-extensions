/* See the locales/en.default.json tab for the translation keys and values for this example */
import {
  reactExtension,
  Banner,
  useApi,
  useTranslate,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
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
