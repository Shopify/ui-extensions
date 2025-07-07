import {
  extension,
  Checkbox,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, api) => {
    async function onCheckboxChange(isChecked) {
      const result =
        await api.applyAttributeChange({
          type: 'updateAttribute',
          key: 'includeGift',
          value: isChecked ? 'yes' : 'no',
        });

      console.log(
        'applyAttributeChange result',
        result,
      );
    }

    root.replaceChildren(
      root.createComponent(
        Checkbox,
        {
          onChange: onCheckboxChange,
        },
        'Include a complimentary gift',
      ),
    );
  },
);
