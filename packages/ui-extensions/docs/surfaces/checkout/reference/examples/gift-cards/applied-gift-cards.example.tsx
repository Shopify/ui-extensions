import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useAppliedGiftCards} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const giftCards = useAppliedGiftCards();

  if (giftCards.length === 0) {
    return null;
  }

  return (
    <s-stack>
      <s-text type="strong">
        Applied gift cards:
      </s-text>
      {giftCards.map((card) => (
        <s-stack
          key={card.lastCharacters}
          direction="inline"
          gap="small-200"
        >
          <s-text>
            •••• {card.lastCharacters}
          </s-text>
          <s-text>
            -{card.amountUsed.amount}{' '}
            {card.amountUsed.currencyCode}
          </s-text>
        </s-stack>
      ))}
    </s-stack>
  );
}
