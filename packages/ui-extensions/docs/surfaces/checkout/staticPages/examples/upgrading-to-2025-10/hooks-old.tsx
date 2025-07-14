import {
  reactExtension,
  Checkbox,
  useAttributeValues,
  useApplyAttributeChange,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const [includeGift] = useAttributeValues([
    'includeGift',
  ]);
  const applyAttributeChange =
    useApplyAttributeChange();

  async function onCheckboxChange(isChecked) {
    const result = await applyAttributeChange({
      type: 'updateAttribute',
      key: 'includeGift',
      value: isChecked ? 'yes' : 'no',
    });

    console.log(
      'applyAttributeChange result',
      result,
    );
  }

  return (
    <Checkbox
      checked={includeGift === 'yes'}
      onChange={onCheckboxChange}
    >
      Include a complimentary gift
    </Checkbox>
  );
}
