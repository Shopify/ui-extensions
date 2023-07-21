/* See the locales/en.default.json tab for the translation keys and values for this example */
import React from 'react';
import {
  reactExtension,
  Text,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  return (
    <Text>{translate('welcomeMessage')}</Text>
  );
}
