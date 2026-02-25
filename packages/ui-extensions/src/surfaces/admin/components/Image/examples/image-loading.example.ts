import {extension, Image, Text, ProgressIndicator, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const loader = root.createComponent(ProgressIndicator, {
      size: 'small-100',
      accessibilityLabel: 'Loading image',
    });
    stack.appendChild(loader);

    const image = root.createComponent(Image, {
      source: 'https://cdn.shopify.com/s/files/placeholder-images/product.png',
      accessibilityLabel: 'Product preview',
      loading: 'lazy',
      onLoad: () => {
        stack.removeChild(loader);
      },
      onError: () => {
        stack.removeChild(loader);
        const error = root.createComponent(
          Text,
          {},
          'Unable to load product image.',
        );
        stack.appendChild(error);
      },
    });

    stack.appendChild(image);
    root.appendChild(stack);
  },
);
