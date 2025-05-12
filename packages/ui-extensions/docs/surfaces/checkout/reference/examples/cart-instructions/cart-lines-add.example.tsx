import {render} from 'preact';
import {
  useApplyCartLinesChange,
  useInstructions,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const applyCartLinesChange =
    useApplyCartLinesChange();
  const instructions = useInstructions();

  if (instructions.lines.canAddCartLine) {
    return (
      <s-button
        onClick={() =>
          applyCartLinesChange({
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
