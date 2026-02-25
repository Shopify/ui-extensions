import {extension, BlockStack, Text, Badge, InlineStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack, {
      gap: true,
      inlineAlignment: 'center',
    });

    const title = root.createComponent(Text, {fontWeight: 'bold'}, 'Integration status');

    const badges = root.createComponent(InlineStack, {gap: true});
    const connectedBadge = root.createComponent(Badge, {tone: 'success'}, 'Connected');
    const syncBadge = root.createComponent(Badge, {tone: 'info'}, 'Auto-sync on');
    badges.appendChild(connectedBadge);
    badges.appendChild(syncBadge);

    const count = root.createComponent(Text, {}, '247 products synced');

    stack.appendChild(title);
    stack.appendChild(badges);
    stack.appendChild(count);
    root.appendChild(stack);
  },
);
