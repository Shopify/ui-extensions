import {useState} from 'react';
import {
  reactExtension,
  Checkbox,
  useDeliveryGroupTarget,
  useApplyAttributeChange,
  useInstructions,
} from '@shopify/ui-extensions-react/checkout';

// 1. Choose an extension target
export default reactExtension(
  '##TARGET##',
  () => <Extension />,
);

function Extension() {
  const targetedDeliveryGroup =
    useDeliveryGroupTarget();
  const applyAttributeChange =
    useApplyAttributeChange();
  const instructions = useInstructions();
  const [checked, setChecked] = useState(false);

  // 2. Render a UI
  if (!targetedDeliveryGroup) {
    return null;
  }

  const groupLabel =
    targetedDeliveryGroup.groupType ===
    'oneTimePurchase'
      ? 'one time purchase'
      : 'subscription';

  return (
    <Checkbox
      onChange={onCheckboxChange}
      checked={checked}
    >
      This {groupLabel} is a gift
    </Checkbox>
  );

  async function onCheckboxChange(isChecked) {
    setChecked(isChecked);
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
      key: `isGift-${targetedDeliveryGroup?.groupType}`,
      type: 'updateAttribute',
      value: isChecked ? 'yes' : 'no',
    });
    console.log(
      'applyAttributeChange result',
      result,
    );
  }
}
