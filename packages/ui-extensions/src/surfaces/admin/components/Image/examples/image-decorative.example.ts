import {extension, Image, Heading, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const banner = root.createComponent(Image, {
      source: 'https://cdn.shopify.com/s/files/partner-branding/banner.png',
      accessibilityLabel: '',
      accessibilityRole: 'decorative',
    });

    const heading = root.createComponent(
      Heading,
      {},
      'Warehouse connection active',
    );

    const description = root.createComponent(
      Text,
      {},
      'Your products are syncing automatically every 15 minutes with your warehouse management system.',
    );

    stack.appendChild(banner);
    stack.appendChild(heading);
    stack.appendChild(description);
    root.appendChild(stack);
  },
);
