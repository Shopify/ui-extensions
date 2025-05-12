import {render} from 'preact';
import {
  useApplyAttributeChange,
  useInstructions,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const applyAttributeChange =
    useApplyAttributeChange();
  const instructions = useInstructions();

  if (
    instructions.attributes.canUpdateAttributes
  ) {
    return (
      <s-button
        onClick={() =>
          applyAttributeChange({
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
