import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const attributes = api.attributes.current;

    if (!attributes || attributes.length === 0) return;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(Text, {emphasis: 'bold'}, 'Order details'),
    );
    for (const attr of attributes) {
      stack.appendChild(
        root.createComponent(Text, {}, `${attr.key}: ${attr.value}`),
      );
    }
    root.appendChild(stack);
  },
);
