import {extension, Icon, Text, BlockStack, Box} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const label = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'App status',
    );

    const iconContainer = root.createComponent(Box, {
      inlineSize: 48,
      blockSize: 48,
    });

    const appIcon = root.createComponent(Icon, {
      name: 'AppsMajor',
      size: 'fill',
      accessibilityLabel: 'App connected',
    });

    iconContainer.appendChild(appIcon);

    const status = root.createComponent(
      Text,
      {},
      'Connected to warehouse system',
    );

    stack.appendChild(label);
    stack.appendChild(iconContainer);
    stack.appendChild(status);
    root.appendChild(stack);
  },
);
