import {
  Banner,
  Button,
  useApplyMetafieldChange,
  useInstructions,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const applyMetafieldChange =
    useApplyMetafieldChange();
  const instructions = useInstructions();

  if (
    instructions.metafields.canSetCartMetafields
  ) {
    return (
      <Button
        onPress={() =>
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
