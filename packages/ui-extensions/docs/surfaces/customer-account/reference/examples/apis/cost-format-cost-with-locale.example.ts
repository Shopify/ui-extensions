import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const total = api.cost.totalAmount.current;
    const subtotal = api.cost.subtotalAmount.current;

    const formattedTotal = api.i18n.formatCurrency(total.amount, {
      currency: total.currencyCode,
    });
    const formattedSubtotal = api.i18n.formatCurrency(
      subtotal.amount,
      {currency: subtotal.currencyCode},
    );

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(Text, {}, `Subtotal: ${formattedSubtotal}`),
    );
    stack.appendChild(
      root.createComponent(
        Text,
        {emphasis: 'bold'},
        `Total: ${formattedTotal}`,
      ),
    );
    root.appendChild(stack);
  },
);
