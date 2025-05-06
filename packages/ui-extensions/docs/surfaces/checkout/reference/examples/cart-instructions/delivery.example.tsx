import {render} from 'preact';
import {
  useApplyShippingAddressChange,
  useInstructions,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const applyShippingAddressChange =
    useApplyShippingAddressChange();
  const instructions = useInstructions();

  if (
    instructions.delivery.canSelectCustomAddress
  ) {
    return (
      <s-button
        onClick={() =>
          applyShippingAddressChange({
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
