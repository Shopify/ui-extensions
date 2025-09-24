/* See the locales/en.default.json tab for the translation keys and values for this example */
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-text>
      {shopify.i18n.translate('welcomeMessage')}
    </s-text>
  );
}
