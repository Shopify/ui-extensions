import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const allocations = api.discountAllocations.current;

    if (allocations.length === 0) return;

    const totalSavings = allocations.reduce(
      (sum, alloc) => sum + alloc.discountedAmount.amount,
      0,
    );
    const currency = allocations[0].discountedAmount.currencyCode;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(
        Text,
        {emphasis: 'bold'},
        `You saved ${api.i18n.formatCurrency(totalSavings, {currency})}`,
      ),
    );

    for (const alloc of allocations) {
      const label =
        alloc.type === 'code' ? `Code "${alloc.code}"` : alloc.title;
      stack.appendChild(
        root.createComponent(
          Text,
          {appearance: 'subdued'},
          `${label} — ${api.i18n.formatCurrency(alloc.discountedAmount.amount, {currency})}`,
        ),
      );
    }
    root.appendChild(stack);
  },
);
