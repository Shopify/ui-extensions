import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-banner>
      {shopify.i18n.translate('welcomeMessage')}
    </s-banner>
  );
}
