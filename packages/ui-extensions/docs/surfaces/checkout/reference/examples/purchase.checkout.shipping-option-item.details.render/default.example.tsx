import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useShippingOptionTarget} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {shippingOptionTarget, isTargetSelected} =
    useShippingOptionTarget();
  const title = shippingOptionTarget.title;

  return (
    <s-text>
      Shipping method: {title} is{' '}
      {isTargetSelected ? '' : 'not'} selected.
    </s-text>
  );
}
