import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const lines = api.lines.current;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(
        Text,
        {emphasis: 'bold'},
        `Order items (${lines.length})`,
      ),
    );

    for (const line of lines) {
      stack.appendChild(
        root.createComponent(
          Text,
          {},
          `${line.merchandise.title} × ${line.quantity} — ${line.cost.totalAmount.amount} ${line.cost.totalAmount.currencyCode}`,
        ),
      );
    }
    root.appendChild(stack);
  },
);
