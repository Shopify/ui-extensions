import {
  extension,
  Checkbox,
} from '@shopify/ui-extensions/checkout';

// 1. Choose an extension target
export default extension(
  'purchase.checkout.shipping-option-list.render-after',
  (root, {target, applyAttributeChange}) => {
    let checkboxShown = false;
    const checkbox =
      root.createComponent(Checkbox);

    target.subscribe((targetedDeliveryGroup) => {
      if (targetedDeliveryGroup) {
        const groupLabel =
          targetedDeliveryGroup.groupType ===
          'oneTimePurchase'
            ? 'one time purchase'
            : 'subscription';

        checkbox.updateProps({
          onChange: () =>
            onCheckboxChange(
              targetedDeliveryGroup,
            ),
        });

        checkbox.replaceChildren(
          `This ${groupLabel} is a gift`,
        );

        // 2. Render a UI
        if (!checkboxShown) {
          root.appendChild(checkbox);
          checkboxShown = true;
        }
      }
    });

    // 3. Call API methods to modify the checkout
    function onCheckboxChange(deliveryGroup) {
      return async (isChecked) => {
        checkbox.updateProps({
          checked: isChecked,
        });
        const result = await applyAttributeChange(
          {
            key: `isGift-${deliveryGroup.groupType}`,
            type: 'updateAttribute',
            value: isChecked ? 'yes' : 'no',
          },
        );
        console.log(
          'applyAttributeChange result',
          result,
        );
      };
    }
  },
);
