import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const subtotal = api.cost.subtotalAmount.current;
    const total = api.cost.totalAmount.current;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(
        Text,
        {},
        `Subtotal: ${subtotal.amount} ${subtotal.currencyCode}`,
      ),
    );
    stack.appendChild(
      root.createComponent(
        Text,
        {emphasis: 'bold'},
        `Total: ${total.amount} ${total.currencyCode}`,
      ),
    );
    root.appendChild(stack);
  },
);
