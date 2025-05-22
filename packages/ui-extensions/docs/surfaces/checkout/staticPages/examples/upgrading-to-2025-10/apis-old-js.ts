import {extension, Checkbox} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root, api) => {
  api.attributes.subscribe(() => render(root, api));
  render(root, api);
});

function render(root, api) {
  const includeGift = api.attributes.current.some(
    (attribute) => attribute.key == 'includeGift' && attribute.value == 'yes',
  );

  async function onCheckboxChange(isChecked) {
    const result = await api.applyAttributeChange({
      type: 'updateAttribute',
      key: 'includeGift',
      value: isChecked ? 'yes' : 'no',
    });
    console.log('applyAttributeChange result', result);
  }

  root.replaceChildren(
    root.createComponent(
      Checkbox,
      {checked: includeGift, onChange: onCheckboxChange},
      'Include a complimentary gift',
    ),
  );
}
