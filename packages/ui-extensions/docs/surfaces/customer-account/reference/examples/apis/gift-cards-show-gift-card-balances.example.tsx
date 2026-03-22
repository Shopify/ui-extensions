import {
  reactExtension,
  useAppliedGiftCards,
  useI18n,
} from '@shopify/ui-extensions-react/customer-account';
import {
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const giftCards = useAppliedGiftCards();
  const i18n = useI18n();

  if (giftCards.length === 0) {
    return null;
  }

  return (
    <BlockStack>
      <Text emphasis="bold">Gift card balances</Text>
      {giftCards.map((card) => {
        const currency = card.balance.currencyCode;
        return (
          <Text key={card.lastCharacters}>
            •••• {card.lastCharacters} — Remaining:{' '}
            {i18n.formatCurrency(card.balance.amount, {
              currency,
            })}
          </Text>
        );
      })}
    </BlockStack>
  );
}
