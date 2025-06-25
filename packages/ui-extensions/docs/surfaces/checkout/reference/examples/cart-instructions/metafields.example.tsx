import {render} from 'preact';
import {
  useApplyMetafieldChange,
  useInstructions,
} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const applyMetafieldChange =
    useApplyMetafieldChange();
  const instructions = useInstructions();

  if (
    instructions.metafields.canSetCartMetafields
  ) {
    return (
      <s-button
        onClick={() =>
          applyMetafieldChange({
            type: 'updateCartMetafield',
            metafield: {
              namespace: 'loyalty',
              key: 'loyaltyPoints',
              value: '100',
              type: 'string',
            },
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
