import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  if (
    shopify.instructions.value.lines
      .canAddCartLine
  ) {
    return (
      <s-button
        onClick={() =>
          shopify.applyCartLinesChange({
            type: 'addCartLine',
            merchandiseId:
              'gid://shopify/product/1234',
            quantity: 1,
          })
        }
      >
        Add a free gift to your order
      </s-button>
    );
  } else {
    return (
      <s-banner tone="warning">
        The products in your cart cannot be
        modified
      </s-banner>
    );
  }
}
