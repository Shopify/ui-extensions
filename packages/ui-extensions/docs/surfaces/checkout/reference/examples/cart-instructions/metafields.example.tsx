import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  if (
    shopify.instructions.value.metafields
      .canSetCartMetafields
  ) {
    return (
      <s-button
        onClick={() =>
          shopify.applyMetafieldChange({
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
