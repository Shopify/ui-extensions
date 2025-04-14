import {
  Banner,
  Button,
  useApplyCartLinesChange,
  useInstructions,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const applyCartLinesChange =
    useApplyCartLinesChange();
  const instructions = useInstructions();

  if (instructions.lines.canAddCartLine) {
    return (
      <Button
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
      </Button>
    );
  } else {
    return (
      <Banner tone="warning">
        The products in your cart cannot be
        modified
      </Banner>
    );
  }
}
