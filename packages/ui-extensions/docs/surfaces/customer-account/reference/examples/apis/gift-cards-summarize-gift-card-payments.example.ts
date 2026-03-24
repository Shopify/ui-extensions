import {
  extension,
  Banner,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const giftCards = api.appliedGiftCards.current;

    if (giftCards.length === 0) return;

    const totalUsed = giftCards.reduce(
      (sum, card) => sum + card.amountUsed.amount,
      0,
    );
    const currency = giftCards[0].amountUsed.currencyCode;

    const banner = root.createComponent(Banner, {status: 'info'});
    banner.appendChild(
      root.createComponent(
        Text,
        {},
        `${giftCards.length} gift card${giftCards.length !== 1 ? 's' : ''} applied for a total of ${api.i18n.formatCurrency(totalUsed, {currency})}.`,
      ),
    );
    root.appendChild(banner);
  },
);
