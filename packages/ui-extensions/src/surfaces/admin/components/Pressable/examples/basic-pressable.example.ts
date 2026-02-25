import {extension, Pressable, Text, Icon, InlineStack, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack, {gap: true});

    const heading = root.createComponent(Text, {fontWeight: 'bold'}, 'Quick actions');

    const syncAction = root.createComponent(Pressable, {
      padding: 'base',
      onPress: async () => {
        await fetch('/api/products/sync', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({productId}),
        });
      },
    });
    const syncRow = root.createComponent(InlineStack, {gap: true, blockAlignment: 'center'});
    const syncIcon = root.createComponent(Icon, {name: 'RefreshMajor', accessibilityLabel: ''});
    const syncText = root.createComponent(Text, {}, 'Sync inventory now');
    syncRow.appendChild(syncIcon);
    syncRow.appendChild(syncText);
    syncAction.appendChild(syncRow);

    const exportAction = root.createComponent(Pressable, {
      padding: 'base',
      onPress: async () => {
        await fetch('/api/products/export', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({productId}),
        });
      },
    });
    const exportRow = root.createComponent(InlineStack, {gap: true, blockAlignment: 'center'});
    const exportIcon = root.createComponent(Icon, {name: 'ExportMinor', accessibilityLabel: ''});
    const exportText = root.createComponent(Text, {}, 'Export product data');
    exportRow.appendChild(exportIcon);
    exportRow.appendChild(exportText);
    exportAction.appendChild(exportRow);

    stack.appendChild(heading);
    stack.appendChild(syncAction);
    stack.appendChild(exportAction);
    root.appendChild(stack);
  },
);
