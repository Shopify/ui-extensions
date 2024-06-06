/* See the locales/en.default.json tab for the translation keys and values for this example */
import {
  reactExtension,
  Text,
  useTranslate,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  return (
    <Text>{translate('welcomeMessage')}</Text>
  );
}
