import {extension, BlockStack, Text, InlineStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack, {
      gap: true,
      inlineAlignment: 'center',
    });

    const title = root.createComponent(Text, {fontWeight: 'bold'}, 'Integration status');

    const badges = root.createComponent(InlineStack, {gap: true});
    const connectedText = root.createComponent(Text, {fontWeight: 'bold'}, 'Connected');
    const syncText = root.createComponent(Text, {fontWeight: 'bold'}, 'Auto-sync on');
    badges.appendChild(connectedText);
    badges.appendChild(syncText);

    const count = root.createComponent(Text, {}, '247 products synced');

    stack.appendChild(title);
    stack.appendChild(badges);
    stack.appendChild(count);
    root.appendChild(stack);
  },
);
