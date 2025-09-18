import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  if (
    shopify.availablePaymentOptions.value.some(
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
