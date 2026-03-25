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
      <s-text type="strong">
        Applied gift cards
      </s-text>
      {giftCards.map((card) => (
        <s-text key={card.lastCharacters}>
          Gift card ending in ••••
          {card.lastCharacters} —{' '}
          {card.amountUsed.amount}{' '}
          {card.amountUsed.currencyCode}
        </s-text>
      ))}
    </s-box>
  );
}
