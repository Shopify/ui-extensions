import {
  reactExtension,
  Checkbox,
  useApplyAttributeChange,
  useInstructions,
} from '@shopify/ui-extensions-react/checkout';

// 1. Choose an extension target
export default reactExtension(
  'purchase.checkout.pickup-location-list.render-after',
  () => <Extension />,
);

function Extension() {
  const applyAttributeChange =
    useApplyAttributeChange();
  const instructions = useInstructions();

  // 2. Render a UI
  return (
    <Checkbox onChange={onCheckboxChange}>
      I would like to receive a free gift with my
      order
    </Checkbox>
  );

  async function onCheckboxChange(isChecked) {
    // 3. Check if the API is available
    if (
      !instructions.attributes.canUpdateAttributes
    ) {
      console.error(
        'Attributes cannot be updated in this checkout',
      );
      return;
    }
    // 4. Call the API to modify checkout
    const result = await applyAttributeChange({
      key: 'requestedFreeGift',
      type: 'updateAttribute',
      value: isChecked ? 'yes' : 'no',
    });
    console.log(
      'applyAttributeChange result',
      result,
    );
  }
}
