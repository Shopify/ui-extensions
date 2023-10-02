import {
  extension,
  Checkbox,
} from '@shopify/ui-extensions/checkout';

// 1. Choose an extension target
export default extension(
  'purchase.checkout.pickup-location-list.render-after',
  (root, api) => {
    // 2. Render a UI
    root.appendChild(
      root.createComponent(
        Checkbox,
        {
          onChange: onCheckboxChange,
        },
        'I would like to receive a free gift with my order',
      ),
    );

    // 3. Call API methods to modify the checkout
    async function onCheckboxChange(isChecked) {
      const result =
        await api.applyAttributeChange({
          key: 'requestedFreeGift',
          type: 'updateAttribute',
          value: isChecked ? 'yes' : 'no',
        });
      console.log(
        'applyAttributeChange result',
        result,
      );
    }
  },
);
