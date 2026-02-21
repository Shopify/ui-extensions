import {extension, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;
    const numericId = productId?.split('/').pop();

    const stack = root.createComponent(BlockStack);

    const label = root.createComponent(
      Text,
      {},
      'External resources',
    );

    const storefrontLink = root.createComponent(Button, {
      href: `https://your-store.myshopify.com/products/${numericId}`,
      target: '_blank',
      variant: 'secondary',
      accessibilityLabel: 'View product on storefront in a new tab',
    }, 'View on storefront');

    const docsLink = root.createComponent(Button, {
      href: 'https://help.shopify.com/manual/products',
      target: '_blank',
      variant: 'tertiary',
    }, 'Product documentation');

    stack.appendChild(label);
    stack.appendChild(storefrontLink);
    stack.appendChild(docsLink);
    root.appendChild(stack);
  },
);
