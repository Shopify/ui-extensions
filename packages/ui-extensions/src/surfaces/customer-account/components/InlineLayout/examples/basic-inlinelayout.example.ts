import {extension, InlineLayout, View} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const inlineLayout = root.createComponent(
    InlineLayout,
    {
      columns: ['20%', 'fill'],
    },
    [
      root.createComponent(View, {border: 'base', padding: 'base'}, '20%'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'fill'),
    ],
  );

  root.appendChild(inlineLayout);
});
