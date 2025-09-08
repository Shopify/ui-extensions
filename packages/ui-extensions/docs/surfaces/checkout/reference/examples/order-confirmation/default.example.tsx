import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {id} =
    shopify.orderConfirmation.value.order;

  if (id) {
    return (
      <s-banner>
        Please include your order confirmation ID
        ({id}) in support requests
      </s-banner>
    );
  }

  return null;
}
