import {
  extension,
  Banner,
  Checkbox,
  BlockStack,
} from '@shopify/ui-extensions/checkout';

// 1. Choose an extension target
export default extension(
  'purchase.checkout.shipping-option-list.render-after',
  (
    root,
    {
      target,
      deliverySelectionGroups:
        deliverySelectionGroupsSubscription,
      applyMetafieldChange,
    },
  ) => {
    const metafieldNamespace = 'yourAppNamespace';
    let checkboxShown = false;
    let bannerShown = false;
    let title = '';
    let deliverySelectionGroupInfo = '';

    const blockStack =
      root.createComponent(BlockStack);
    blockStack.updateProps({
      spacing: 'base',
    });
    root.append(blockStack);
    const checkbox =
      root.createComponent(Checkbox);
    const banner = root.createComponent(Banner);
    banner.updateProps({
      status: 'info',
    });

    target.subscribe((deliveryGroupList) => {
      if (!deliveryGroupList) {
        return;
      }

      const {groupType, deliveryGroups} =
        deliveryGroupList;
      const metafieldKey =
        groupType === 'oneTimePurchase'
          ? 'isGift-oneTimePurchase'
          : 'isGift-subscription';
      const groupLabel =
        deliveryGroupList.groupType ===
        'oneTimePurchase'
          ? 'one time purchase'
          : 'subscription';
      title =
        deliveryGroups.length > 1
          ? `Your order contains multiple ${groupLabel} shipments.`
          : `Your order contains one ${groupLabel} shipment.`;

      banner.updateProps({
        title: `${title}${deliverySelectionGroupInfo}`,
      });
      checkbox.updateProps({
        onChange: (isChecked) =>
          onCheckboxChange(
            isChecked,
            metafieldKey,
          ),
      });
      checkbox.replaceChildren(
        `The ${groupLabel} section contains gifts`,
      );

      // 2. Render a UI
      if (!bannerShown) {
        blockStack.append(banner);
        bannerShown = true;
      }
      if (!checkboxShown) {
        blockStack.append(checkbox);
        checkboxShown = true;
      }
    });

    deliverySelectionGroupsSubscription.subscribe(
      (deliverySelectionGroups) => {
        const selectedDeliverySelectionGroup =
          deliverySelectionGroups?.find(
            ({selected}) => selected,
          );
        if (selectedDeliverySelectionGroup) {
          deliverySelectionGroupInfo = ` Items will be delivered with the ${selectedDeliverySelectionGroup.title} delivery selection group.`;
          banner.updateProps({
            title: `${title}${deliverySelectionGroupInfo}`,
          });
        }
      },
    );

    // 3. Call API methods to modify the checkout
    async function onCheckboxChange(
      isChecked,
      metafieldKey,
    ) {
      checkbox.updateProps({
        checked: isChecked,
      });
      const result = await applyMetafieldChange({
        type: 'updateMetafield',
        namespace: metafieldNamespace,
        key: metafieldKey,
        value: isChecked ? 'yes' : 'no',
        valueType: 'string',
      });
      console.log(
        'applyMetafieldChange result',
        result,
      );
    }
  },
);
