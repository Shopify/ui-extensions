import {useState} from 'react';
import {
  reactExtension,
  Banner,
  Checkbox,
  useDeliverySelectionGroups,
  useDeliveryGroupListTarget,
  useApplyMetafieldsChange,
  BlockStack,
} from '@shopify/ui-extensions-react/checkout';

// 1. Choose an extension target
export default reactExtension(
  'purchase.checkout.shipping-option-list.render-before',
  () => <Extension />,
);

function Extension() {
  const metafieldNamespace = 'yourAppNamespace';
  const deliveryGroupList =
    useDeliveryGroupListTarget();
  const deliverySelectionGroups =
    useDeliverySelectionGroups();
  const applyMetafieldsChange =
    useApplyMetafieldsChange();
  const [checked, setChecked] = useState(false);

  // 2. Render a UI
  if (!deliveryGroupList) {
    return null;
  }

  const {groupType, deliveryGroups} =
    deliveryGroupList;
  const metafieldKey =
    groupType === 'oneTimePurchase'
      ? 'isGift-oneTimePurchase'
      : 'isGift-subscription';
  const selectedDeliverySelectionGroup =
    deliverySelectionGroups?.find(
      ({selected}) => selected,
    );

  const groupLabel =
    groupType === 'oneTimePurchase'
      ? 'one time purchase'
      : 'subscription';

  const title =
    deliveryGroups.length > 1
      ? `Your order contains multiple ${groupLabel} shipments.`
      : `Your order contains one ${groupLabel} shipment.`;

  let deliverySelectionGroupInfo = '';
  if (selectedDeliverySelectionGroup) {
    deliverySelectionGroupInfo = ` Items will be delivered with the ${selectedDeliverySelectionGroup.title} delivery selection group.`;
  }

  return (
    <BlockStack spacing="base">
      <Banner
        status="info"
        title={`${title}${deliverySelectionGroupInfo}`}
      />
      <Checkbox
        onChange={onCheckboxChange}
        checked={checked}
      >
        The {groupLabel} section contains gifts
      </Checkbox>
    </BlockStack>
  );

  // 3. Call API methods to modify the checkout
  async function onCheckboxChange(isChecked) {
    setChecked(isChecked);
    const result = await applyMetafieldsChange({
      type: 'updateMetafield',
      namespace: metafieldNamespace,
      key: metafieldKey,
      value: isChecked ? 'yes' : 'no',
      valueType: 'string',
    });
    console.log(
      'applyMetafieldsChange result',
      result,
    );
  }
}
