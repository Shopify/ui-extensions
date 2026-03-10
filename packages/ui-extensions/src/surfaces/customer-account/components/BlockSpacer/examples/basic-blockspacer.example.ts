import {extension, BlockSpacer, View} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const blockSpacer = root.createComponent(View, undefined, [
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(BlockSpacer, {spacing: 'loose'}),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
  ]);

  root.appendChild(blockSpacer);
});
