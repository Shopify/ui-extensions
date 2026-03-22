import {
  extension,
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const allMetafields = api.appMetafields.current;
    const productMetafields = allMetafields.filter(
      (entry) => entry.target.type === 'product',
    );

    if (productMetafields.length === 0) return;

    const stack = root.createComponent(BlockStack, {});
    stack.appendChild(
      root.createComponent(Text, {emphasis: 'bold'}, 'Product details'),
    );

    for (const entry of productMetafields) {
      stack.appendChild(
        root.createComponent(
          Text,
          {},
          `${entry.metafield.key}: ${String(entry.metafield.value)}`,
        ),
      );
    }
    root.appendChild(stack);
  },
);
