import {render} from 'preact';
import {
  useAttributeValues,
  useApplyAttributeChange,
  useInstructions,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const [giftWrapValue] = useAttributeValues([
    'giftWrap',
  ]);
  const giftWrap = Boolean(giftWrapValue);
  const applyAttributeChange =
    useApplyAttributeChange();
  const instructions = useInstructions();

  async function toggleGiftWrap() {
    const result = giftWrap
      ? await applyAttributeChange({
          type: 'removeAttribute',
          key: 'giftWrap',
        })
      : await applyAttributeChange({
          type: 'updateAttribute',
          key: 'giftWrap',
          value: 'true',
        });
    if (result.type === 'error') {
      console.error(result.message);
    }
  }

  return (
    <s-stack>
      <s-text>
        Gift wrapping:{' '}
        {giftWrap ? 'Added' : 'Not set'}
      </s-text>
      <s-button
        onClick={toggleGiftWrap}
        disabled={
          !instructions.attributes
            .canUpdateAttributes
        }
      >
        {giftWrap
          ? 'Remove gift wrap'
          : 'Add gift wrap'}
      </s-button>
    </s-stack>
  );
}
