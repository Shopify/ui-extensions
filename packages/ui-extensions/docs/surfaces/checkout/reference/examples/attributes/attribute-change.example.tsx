import {
  reactExtension,
  BlockStack,
  Button,
  Text,
  useAttributeValues,
  useApplyAttributeChange,
  useInstructions,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const [giftWrapValue] = useAttributeValues([
    'giftWrap',
  ]);
  const giftWrap = Boolean(giftWrapValue);
  const applyAttributeChange =
    useApplyAttributeChange();
  const instructions = useInstructions();

  async function toggleGiftWrap() {
    const result = giftWrap
      ? await applyAttributeChange({
          type: 'removeAttribute',
          key: 'giftWrap',
        })
      : await applyAttributeChange({
          type: 'updateAttribute',
          key: 'giftWrap',
          value: 'true',
        });
    if (result.type === 'error') {
      console.error(result.message);
    }
  }

  return (
    <BlockStack spacing="tight">
      <Text>
        Gift wrapping:{' '}
        {giftWrap ? 'Added' : 'Not set'}
      </Text>
      <Button
        onPress={toggleGiftWrap}
        disabled={
          !instructions.attributes
            .canUpdateAttributes
        }
      >
        {giftWrap
          ? 'Remove gift wrap'
          : 'Add gift wrap'}
      </Button>
    </BlockStack>
  );
}
