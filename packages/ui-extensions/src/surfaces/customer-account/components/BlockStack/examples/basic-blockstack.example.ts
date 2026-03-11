import {extension, BlockStack, View} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const blockStack = root.createComponent(BlockStack, undefined, [
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
  ]);

  root.appendChild(blockStack);
});
