import {
  reactExtension,
  Checkbox,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const api = useApi();

  async function onCheckboxChange(isChecked) {
    const result = await api.applyAttributeChange(
      {
        type: 'updateAttribute',
        key: 'includeGift',
        value: isChecked ? 'yes' : 'no',
      },
    );

    console.log(
      'applyAttributeChange result',
      result,
    );
  }

  return (
    <Checkbox onChange={onCheckboxChange}>
      Include a complimentary gift
    </Checkbox>
  );
}
