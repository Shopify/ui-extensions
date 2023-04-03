/* See the locales/en.default.json tab for the translation keys and values for this example */
import React from 'react';
import {
  render,
  Text,
  useTranslate,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  return (
    <Text>{translate('welcomeMessage')}</Text>
  );
}
