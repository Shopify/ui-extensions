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

    const codeDiscounts = allocations.filter((a) => a.type === 'code');
    const automaticDiscounts = allocations.filter(
      (a) => a.type === 'automatic',
    );

    const stack = root.createComponent(BlockStack, {});

    if (codeDiscounts.length > 0) {
      stack.appendChild(
        root.createComponent(Text, {emphasis: 'bold'}, 'Code discounts'),
      );
      for (const d of codeDiscounts) {
        stack.appendChild(
          root.createComponent(
            Text,
            {},
            `${d.code}: -${d.discountedAmount.amount} ${d.discountedAmount.currencyCode}`,
          ),
        );
      }
    }

    if (automaticDiscounts.length > 0) {
      stack.appendChild(
        root.createComponent(
          Text,
          {emphasis: 'bold'},
          'Automatic discounts',
        ),
      );
      for (const d of automaticDiscounts) {
        stack.appendChild(
          root.createComponent(
            Text,
            {},
            `${d.title}: -${d.discountedAmount.amount} ${d.discountedAmount.currencyCode}`,
          ),
        );
      }
    }

    root.appendChild(stack);
  },
);
