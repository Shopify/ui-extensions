import {extension, Box, Image, Text, InlineStack, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack, {gap: true});

    const row = root.createComponent(InlineStack, {gap: true});

    const imageBox = root.createComponent(Box, {
      inlineSize: 80,
      blockSize: 80,
    });
    const image = root.createComponent(Image, {
      source: 'https://cdn.shopify.com/s/files/placeholder-images/product.png',
      accessibilityLabel: 'Product thumbnail',
    });
    imageBox.appendChild(image);

    const detailBox = root.createComponent(Box);
    const title = root.createComponent(Text, {fontWeight: 'bold'}, 'Premium Widget');
    const sku = root.createComponent(Text, {}, 'SKU: WH-1234');
    const price = root.createComponent(Text, {}, '$49.99');
    detailBox.appendChild(title);
    detailBox.appendChild(sku);
    detailBox.appendChild(price);

    row.appendChild(imageBox);
    row.appendChild(detailBox);

    stack.appendChild(row);
    root.appendChild(stack);
  },
);
