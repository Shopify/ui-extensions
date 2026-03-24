import {
  reactExtension,
  useAppliedGiftCards,
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

  if (giftCards.length === 0) {
    return null;
  }

  return (
    <BlockStack>
      <Text emphasis="bold">Gift cards applied</Text>
      {giftCards.map((card) => (
        <Text key={card.lastCharacters}>
          •••• {card.lastCharacters} — Used:{' '}
          {card.amountUsed.amount}{' '}
          {card.amountUsed.currencyCode}
        </Text>
      ))}
    </BlockStack>
  );
}
