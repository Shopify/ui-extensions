import {
  Banner,
  Button,
  useApplyShippingAddressChange,
  useInstructions,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const applyShippingAddressChange =
    useApplyShippingAddressChange();
  const instructions = useInstructions();

  if (
    instructions.delivery.canSelectCustomAddress
  ) {
    return (
      <Button
        onPress={() =>
          applyShippingAddressChange({
            type: 'updateShippingAddress',
            address: {
              zip: '90201',
            },
          })
        }
      >
        Change your postal code
      </Button>
    );
  } else {
    return (
      <Banner status="warning">
        Shipping address cannot be modified
      </Banner>
    );
  }
}
