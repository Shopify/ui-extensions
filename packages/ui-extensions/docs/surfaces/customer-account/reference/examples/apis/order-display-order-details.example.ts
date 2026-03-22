import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const order = api.order.current;

    if (!order) {
      root.appendChild(
        root.createComponent(Text, {}, 'Loading order details...'),
      );
      return;
    }

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(
        Text,
        {emphasis: 'bold'},
        `Order ${order.name}`,
      ),
    );
    if (order.confirmationNumber) {
      stack.appendChild(
        root.createComponent(
          Text,
          {},
          `Confirmation: ${order.confirmationNumber}`,
        ),
      );
    }
    if (order.processedAt) {
      stack.appendChild(
        root.createComponent(
          Text,
          {appearance: 'subdued'},
          `Placed on ${new Date(order.processedAt).toLocaleDateString()}`,
        ),
      );
    }
    root.appendChild(stack);
  },
);
