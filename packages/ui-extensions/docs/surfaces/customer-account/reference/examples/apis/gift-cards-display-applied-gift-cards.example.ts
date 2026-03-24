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
      root.createComponent(Text, {emphasis: 'bold'}, 'Gift cards applied'),
    );

    for (const card of giftCards) {
      stack.appendChild(
        root.createComponent(
          Text,
          {},
          `•••• ${card.lastCharacters} — Used: ${card.amountUsed.amount} ${card.amountUsed.currencyCode}`,
        ),
      );
    }
    root.appendChild(stack);
  },
);
