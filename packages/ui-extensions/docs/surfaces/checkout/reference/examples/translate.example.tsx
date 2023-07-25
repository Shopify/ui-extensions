/* See the locales/en.default.json tab for the translation keys and values for this example */
import {
  reactExtension,
  Text,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  return (
    <Text>{translate('welcomeMessage')}</Text>
  );
}
