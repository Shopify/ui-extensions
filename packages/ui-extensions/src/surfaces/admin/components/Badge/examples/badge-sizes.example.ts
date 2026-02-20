import {extension, Badge, InlineStack, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Sales channels',
    );

    const channels = root.createComponent(InlineStack);

    const online = root.createComponent(
      Badge,
      {size: 'small-100', tone: 'success'},
      'Online Store',
    );

    const pos = root.createComponent(
      Badge,
      {size: 'small-100', tone: 'success'},
      'POS',
    );

    const pending = root.createComponent(
      Badge,
      {size: 'small-100', tone: 'info'},
      'Facebook — pending',
    );

    channels.appendChild(online);
    channels.appendChild(pos);
    channels.appendChild(pending);

    stack.appendChild(heading);
    stack.appendChild(channels);
    root.appendChild(stack);
  },
);
