import {render} from 'preact';
import {
  useApplyAttributeChange,
  useAttributeValues,
  useInstructions,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const [freeGiftRequested] = useAttributeValues([
    'requestedFreeGift',
  ]);
  const applyAttributeChange =
    useApplyAttributeChange();
  const instructions = useInstructions();

  // 1. Render a UI
  return (
    <s-button
      onClick={onButtonClick}
      variant={
        freeGiftRequested === 'yes'
          ? 'secondary'
          : 'primary'
      }
    >
      {freeGiftRequested === 'yes'
        ? 'Remove free gift'
        : 'Request a free gift with my order'}
    </s-button>
  );

  async function onButtonClick() {
    // 2. Check if the API is available
    if (
      !instructions.attributes.canUpdateAttributes
    ) {
      console.error(
        'Attributes cannot be updated in this checkout',
      );
      return;
    }

    // 3. Call the API to modify checkout
    const result = await applyAttributeChange({
      key: 'requestedFreeGift',
      type: 'updateAttribute',
      value:
        freeGiftRequested === 'yes'
          ? 'no'
          : 'yes',
    });
    console.log(
      'applyAttributeChange result',
      result,
    );
  }
}
