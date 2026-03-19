import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useCheckoutToken} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const checkoutToken = useCheckoutToken();

  if (!checkoutToken) {
    return null;
  }

  return (
    <s-text>
      Checkout reference: {checkoutToken}
    </s-text>
  );
}
