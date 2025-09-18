import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  if (
    shopify.instructions.value.delivery
      .canSelectCustomAddress
  ) {
    return (
      <s-button
        onClick={() =>
          shopify.applyShippingAddressChange({
            type: 'updateShippingAddress',
            address: {
              zip: '90201',
            },
          })
        }
      >
        Change your postal code
      </s-button>
    );
  } else {
    return (
      <s-banner tone="warning">
        Shipping address cannot be modified
      </s-banner>
    );
  }
}
