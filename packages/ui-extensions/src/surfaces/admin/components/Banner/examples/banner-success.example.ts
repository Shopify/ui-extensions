import {extension, Banner, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack);

    const banner = root.createComponent(
      Banner,
      {
        title: 'Product updated successfully',
        tone: 'success',
        dismissible: true,
        onDismiss: () => {
          stack.removeChild(banner);
        },
      },
      `Tags and metafields for product ${productId} have been synced to your external catalog.`,
    );

    stack.appendChild(banner);
    root.appendChild(stack);
  },
);
