import {
  Banner,
  Button,
  useApplyAttributeChange,
  useInstructions,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const applyAttributeChange =
    useApplyAttributeChange();
  const instructions = useInstructions();

  if (
    instructions.attributes.canUpdateAttributes
  ) {
    return (
      <Button
        onPress={() =>
          applyAttributeChange({
            type: 'updateAttribute',
            key: 'loyaltyPoints',
            value: '100',
          })
        }
      >
        Apply 100 loyalty points
      </Button>
    );
  } else {
    return (
      <Banner status="warning">
        Loyalty points are unavailable
      </Banner>
    );
  }
}
