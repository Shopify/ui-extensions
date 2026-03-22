import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const note = api.note.current;

    if (!note) return;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(
        Text,
        {emphasis: 'bold'},
        'Special instructions',
      ),
    );
    stack.appendChild(root.createComponent(Text, {}, note));
    root.appendChild(stack);
  },
);
