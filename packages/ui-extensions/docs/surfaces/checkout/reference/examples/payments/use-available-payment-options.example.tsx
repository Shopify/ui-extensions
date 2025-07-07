import {render} from 'preact';
import {useAvailablePaymentOptions} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const options = useAvailablePaymentOptions();

  if (
    options.some(
      (option) => option.type === 'wallet',
    )
  ) {
    return (
      <s-banner>
        Select an express payment method for
        faster checkout
      </s-banner>
    );
  }

  return null;
}
