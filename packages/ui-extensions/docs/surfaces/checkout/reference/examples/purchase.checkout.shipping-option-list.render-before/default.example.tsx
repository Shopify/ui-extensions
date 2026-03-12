import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const metafieldNamespace = 'yourAppNamespace';
  const [checked, setChecked] = useState(false);

  // 1. Render a UI
  if (!shopify.target.value) {
    return null;
  }

  const {groupType, deliveryGroups} =
    shopify.target.value;
  const metafieldKey =
    groupType === 'oneTimePurchase'
      ? 'isGift-oneTimePurchase'
      : 'isGift-subscription';
  const selectedDeliverySelectionGroup =
    shopify.deliverySelectionGroups.value?.find(
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
    <s-stack gap="base">
      <s-banner
        tone="info"
        heading={`${title}${deliverySelectionGroupInfo}`}
      />
      <s-checkbox
        onChange={onCheckboxChange}
        checked={checked}
        label={`The ${groupLabel} section contains gifts`}
      />
    </s-stack>
  );

  // 2. Call API methods to modify the checkout
  async function onCheckboxChange(isChecked) {
    setChecked(isChecked);
    const result =
      await shopify.applyMetafieldChange({
        type: 'updateCartMetafield',
        metafield: {
          namespace: metafieldNamespace,
          key: metafieldKey,
          value: isChecked ? 'yes' : 'no',
          type: 'single_line_text_field',
        },
      });
    console.log(
      'applyMetafieldsChange result',
      result,
    );
  }
}
