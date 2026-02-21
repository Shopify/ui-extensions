import {extension, AdminBlock, Text, InlineStack, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const content = root.createComponent(BlockStack, {gap: true});

    const statusRow = root.createComponent(InlineStack, {gap: true});
    const statusLabel = root.createComponent(Text, {}, 'Sync status:');
    const status = root.createComponent(Text, {fontWeight: 'bold'}, 'Connected');
    statusRow.appendChild(statusLabel);
    statusRow.appendChild(status);

    const lastSync = root.createComponent(Text, {}, 'Last synced 5 minutes ago');
    const inventory = root.createComponent(Text, {}, 'Warehouse inventory: 247 units across 3 locations');

    content.appendChild(statusRow);
    content.appendChild(lastSync);
    content.appendChild(inventory);

    const block = root.createComponent(AdminBlock, {
      title: 'Warehouse integration',
    });
    block.appendChild(content);
    root.appendChild(block);
  },
);
