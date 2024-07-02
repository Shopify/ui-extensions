import {
  Banner,
  Button,
  useApplyDiscountCodeChange,
  useInstructions,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const applyDiscountCodeChange =
    useApplyDiscountCodeChange();
  const instructions = useInstructions();

  if (
    instructions.discounts.canUpdateDiscountCodes
  ) {
    return (
      <Button
        onPress={() =>
          applyDiscountCodeChange({
            type: 'addDiscountCode',
            code: 'FREE_SHIPPING',
          })
        }
      >
        Apply your loyalty discount
      </Button>
    );
  } else {
    return (
      <Banner status="warning">
        Loyalty discounts are unavailable
      </Banner>
    );
  }
}
