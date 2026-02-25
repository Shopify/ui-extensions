import {extension, Link, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;
    const numericId = productId?.split('/').pop();

    const stack = root.createComponent(BlockStack, {gap: true});

    const heading = root.createComponent(Text, {fontWeight: 'bold'}, 'External resources');

    const storefrontLink = root.createComponent(
      Link,
      {
        href: `https://your-store.myshopify.com/products/${numericId}`,
        target: '_blank',
      },
      'View on storefront',
    );

    const docsLink = root.createComponent(
      Link,
      {
        href: 'https://help.shopify.com/manual/products',
        target: '_blank',
      },
      'Shopify product documentation',
    );

    stack.appendChild(heading);
    stack.appendChild(storefrontLink);
    stack.appendChild(docsLink);
    root.appendChild(stack);
  },
);
