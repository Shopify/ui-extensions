import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const giftCards =
    shopify.appliedGiftCards.value;

  if (giftCards.length === 0) {
    return null;
  }

  return (
    <s-box>
      {giftCards.map((card) => (
        <s-box key={card.lastCharacters}>
          <s-text type="strong">
            Gift card ••••{card.lastCharacters}
          </s-text>
          <s-stack direction="inline">
            <s-text>
              Used: {card.amountUsed.amount}{' '}
              {card.amountUsed.currencyCode}
            </s-text>
            <s-text color="subdued">
              Remaining: {card.balance.amount}{' '}
              {card.balance.currencyCode}
            </s-text>
          </s-stack>
        </s-box>
      ))}
    </s-box>
  );
}
