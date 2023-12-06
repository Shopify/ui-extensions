import {useState} from 'react';
import {
  reactExtension,
  Checkbox,
  useDeliveryGroupTarget,
  useApplyAttributeChange,
} from '@shopify/ui-extensions-react/checkout';

// 1. Choose an extension target
export default reactExtension(
  'purchase.checkout.shipping-option-list.render-after',
  () => <Extension />,
);

function Extension() {
  const targetedDeliveryGroup =
    useDeliveryGroupTarget();
  const applyAttributeChange =
    useApplyAttributeChange();
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

  // 3. Call API methods to modify the checkout
  async function onCheckboxChange(isChecked) {
    setChecked(isChecked);
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
