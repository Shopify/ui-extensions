import {
  reactExtension,
  useAppliedGiftCards,
  useI18n,
} from '@shopify/ui-extensions-react/customer-account';
import {
  Banner,
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

  const totalUsed = giftCards.reduce(
    (sum, card) => sum + card.amountUsed.amount,
    0,
  );
  const currency = giftCards[0].amountUsed.currencyCode;

  return (
    <Banner status="info">
      <Text>
        {giftCards.length} gift card
        {giftCards.length !== 1 ? 's' : ''} applied
        for a total of{' '}
        {i18n.formatCurrency(totalUsed, {currency})}.
      </Text>
    </Banner>
  );
}
