import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const giftCards =
    shopify.appliedGiftCards.value;
  const totalAmount =
    shopify.cost.totalAmount.value;

  const giftCardTotal = giftCards.reduce(
    (sum, card) =>
      sum + Number(card.amountUsed.amount),
    0,
  );

  return (
    <s-box>
      <s-text type="strong">
        Payment summary
      </s-text>
      <s-divider />
      {giftCards.map((card) => (
        <s-stack
          key={card.lastCharacters}
          direction="inline"
        >
          <s-text>
            Gift card ••••{card.lastCharacters}
          </s-text>
          <s-text>
            -{card.amountUsed.amount}{' '}
            {card.amountUsed.currencyCode}
          </s-text>
        </s-stack>
      ))}
      {giftCards.length > 0 && <s-divider />}
      <s-stack direction="inline">
        <s-text type="strong">
          Total
        </s-text>
        <s-text type="strong">
          {totalAmount.amount}{' '}
          {totalAmount.currencyCode}
        </s-text>
      </s-stack>
    </s-box>
  );
}
