import {extension, Pressable, Text, Image, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;
    const numericId = productId?.split('/').pop();

    const stack = root.createComponent(BlockStack, {gap: true});

    const card = root.createComponent(Pressable, {
      href: `https://your-store.myshopify.com/products/${numericId}`,
      target: '_blank',
      padding: 'base',
    });

    const image = root.createComponent(Image, {
      source: 'https://cdn.shopify.com/s/files/placeholder-images/product.png',
      accessibilityLabel: 'Product preview',
    });
    const title = root.createComponent(Text, {fontWeight: 'bold'}, 'View on storefront');
    const description = root.createComponent(Text, {}, 'Opens the live product page in a new tab');

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);

    stack.appendChild(card);
    root.appendChild(stack);
  },
);
