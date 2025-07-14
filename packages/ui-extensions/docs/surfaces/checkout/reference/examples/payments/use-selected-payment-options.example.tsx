import {render} from 'preact';
import {useSelectedPaymentOptions} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const options = useSelectedPaymentOptions();

  if (
    options.some(
      (option) => option.type === 'creditCard',
    )
  ) {
    return (
      <s-banner>
        All credit card transactions are secure
      </s-banner>
    );
  }

  return null;
}
