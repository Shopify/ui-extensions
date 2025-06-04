/* See the locales/en.default.json tab for the translation keys and values for this example */
import {render} from 'preact';
import {useTranslate} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const translate = useTranslate();
  return (
    <s-text>{translate('welcomeMessage')}</s-text>
  );
}
