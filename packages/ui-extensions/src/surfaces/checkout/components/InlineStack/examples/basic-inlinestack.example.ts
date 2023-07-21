import {extension, InlineStack, View} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const inlineStack = root.createComponent(
    InlineStack,
    {
      spacing: 'base',
    },
    [
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
      root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    ],
  );

  root.appendChild(inlineStack);
});
