import {extension, Divider, Heading, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root) => {

    const stack = root.createComponent(BlockStack);

    const title = root.createComponent(Heading, {}, 'Sync status');
    const status = root.createComponent(Text, {}, 'Last synced 5 minutes ago — all fields up to date.');

    const divider = root.createComponent(Divider);

    const historyTitle = root.createComponent(Heading, {size: 3}, 'Recent changes');
    const history = root.createComponent(Text, {}, '3 metafields updated, 1 tag added in the last 24 hours.');

    stack.appendChild(title);
    stack.appendChild(status);
    stack.appendChild(divider);
    stack.appendChild(historyTitle);
    stack.appendChild(history);
    root.appendChild(stack);
  },
);
