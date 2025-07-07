import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-checkbox
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
