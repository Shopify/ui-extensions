import {
  reactExtension,
  Checkbox,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

export default reactExtension('pos.home.modal.render', () => <Extension />);

function Extension() {
  const api = useApi();

  async function onCheckboxChange(isChecked) {
    const result = await api.applyAttributeChange({
      type: 'updateAttribute',
      key: 'includeGift',
      value: isChecked ? 'yes' : 'no',
    });

    console.log('applyAttributeChange result', result);
  }

  return (
    <Checkbox onChange={onCheckboxChange}>
      Include a complimentary gift
    </Checkbox>
  );
}
