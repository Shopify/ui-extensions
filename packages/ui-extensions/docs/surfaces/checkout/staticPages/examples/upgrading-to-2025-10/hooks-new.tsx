import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useAttributeValues} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const [includeGift] = useAttributeValues([
    'includeGift',
  ]);
  return (
    <s-checkbox
      checked={includeGift === 'yes'}
      onChange={onCheckboxChange}
      label="Include a complimentary gift"
    />
  );
}

async function onCheckboxChange(event) {
  const isChecked = event.target.checked;

  const result =
    await shopify.applyAttributeChange({
      type: 'updateAttribute',
      key: 'includeGift',
      value: isChecked ? 'yes' : 'no',
    });

  console.log(
    'applyAttributeChange result',
    result,
  );
}
