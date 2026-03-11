import {extension, BlockLayout, View} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const blockLayout = root.createComponent(
    BlockLayout,
    {
      rows: [60, 'fill'],
    },
    [
      root.createComponent(View, {border: 'base', padding: 'base'}, '60'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'fill'),
    ],
  );

  root.appendChild(blockLayout);
});
