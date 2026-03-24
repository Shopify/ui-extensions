import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const appMetafields = api.appMetafields.current;

    if (appMetafields.length === 0) return;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(Text, {emphasis: 'bold'}, 'Custom data'),
    );

    for (const entry of appMetafields) {
      stack.appendChild(
        root.createComponent(
          Text,
          {},
          `${entry.metafield.namespace}.${entry.metafield.key}: ${String(entry.metafield.value)}`,
        ),
      );
    }
    root.appendChild(stack);
  },
);
