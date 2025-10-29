import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useAttributeValues} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const [freeGiftRequested] = useAttributeValues([
    'requestedFreeGift',
  ]);

  // 1. Render a UI
  return (
    <s-checkbox
      checked={freeGiftRequested === 'yes'}
      onChange={onCheckboxChange}
      label="I would like to receive a free gift with my order"
    />
  );

  async function onCheckboxChange(event) {
    const isChecked = event.currentTarget.checked;
    // 2. Check if the API is available
    if (
      !shopify.instructions.value.attributes
        .canUpdateAttributes
    ) {
      console.error(
        'Attributes cannot be updated in this checkout',
      );
      return;
    }
    // 3. Call the API to modify checkout
    const result =
      await shopify.applyAttributeChange({
        key: 'requestedFreeGift',
        type: 'updateAttribute',
        value: isChecked ? 'yes' : 'no',
      });
    console.log(
      'applyAttributeChange result',
      result,
    );
  }
}
