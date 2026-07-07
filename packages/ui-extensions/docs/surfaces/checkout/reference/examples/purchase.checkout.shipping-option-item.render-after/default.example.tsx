import {render} from 'preact';

import {useShippingOptionTarget} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {shippingOptionTarget, isTargetSelected} =
    useShippingOptionTarget();
  const {
    cost: {amount, currencyCode},
    title,
  } = shippingOptionTarget;

  return (
    <s-text>
      Shipping method: {title} is{' '}
      {isTargetSelected ? '' : 'not '}selected.
      Cost:{' '}
      {Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
      }).format(amount)}
    </s-text>
  );
}
