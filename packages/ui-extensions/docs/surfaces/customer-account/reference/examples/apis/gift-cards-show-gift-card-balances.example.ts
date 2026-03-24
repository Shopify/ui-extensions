import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const giftCards = api.appliedGiftCards.current;

    if (giftCards.length === 0) return;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(Text, {emphasis: 'bold'}, 'Gift card balances'),
    );

    for (const card of giftCards) {
      const currency = card.balance.currencyCode;
      stack.appendChild(
        root.createComponent(
          Text,
          {},
          `•••• ${card.lastCharacters} — Remaining: ${api.i18n.formatCurrency(card.balance.amount, {currency})}`,
        ),
      );
    }
    root.appendChild(stack);
  },
);
