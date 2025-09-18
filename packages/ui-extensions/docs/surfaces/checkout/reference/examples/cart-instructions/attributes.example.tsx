import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  if (
    shopify.instructions.value.attributes
      .canUpdateAttributes
  ) {
    return (
      <s-button
        onClick={() =>
          shopify.applyAttributeChange({
            type: 'updateAttribute',
            key: 'loyaltyPoints',
            value: '100',
          })
        }
      >
        Apply 100 loyalty points
      </s-button>
    );
  } else {
    return (
      <s-banner tone="warning">
        Loyalty points are unavailable
      </s-banner>
    );
  }
}
