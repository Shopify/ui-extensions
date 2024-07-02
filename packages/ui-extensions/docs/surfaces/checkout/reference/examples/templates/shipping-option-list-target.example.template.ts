import {
  extension,
  Checkbox,
} from '@shopify/ui-extensions/checkout';

// 1. Choose an extension target
export default extension(
  '##TARGET##',
  (root, api) => {
    let checkboxShown = false;
    const checkbox =
      root.createComponent(Checkbox);

    api.target.subscribe(
      (targetedDeliveryGroup) => {
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
      },
    );

    function onCheckboxChange(deliveryGroup) {
      return async (isChecked) => {
        checkbox.updateProps({
          checked: isChecked,
        });
        // 3. Check if the API is available
        if (
          !api.instructions.current.attributes
            .canUpdateAttributes
        ) {
          console.error(
            'Attributes cannot be updated in this checkout',
          );
          return;
        }
        // 4. Call the API to modify checkout
        const result =
          await api.applyAttributeChange({
            key: `isGift-${deliveryGroup.groupType}`,
            type: 'updateAttribute',
            value: isChecked ? 'yes' : 'no',
          });
        console.log(
          'applyAttributeChange result',
          result,
        );
      };
    }
  },
);
