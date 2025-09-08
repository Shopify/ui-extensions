import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  if (
    shopify.selectedPaymentOptions.value.some(
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
