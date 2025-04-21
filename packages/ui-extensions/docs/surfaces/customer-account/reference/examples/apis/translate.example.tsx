/* See the locales/en.default.json tab for the translation keys and values for this example */
import {render} from 'preact';

export default function extension() {
  render(<App />, document.body);
}

function App() {
  return (
    <s-text>
      {shopify.i18n.translate('welcomeMessage')}
    </s-text>
  );
}
