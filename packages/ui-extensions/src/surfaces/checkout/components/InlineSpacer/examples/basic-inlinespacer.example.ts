import {
  extend,
  InlineSpacer,
  InlineStack,
  View,
} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const inlineSpacer = root.createComponent(InlineStack, {spacing: 'none'}, [
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(InlineSpacer, {spacing: 'loose'}),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
  ]);

  root.appendChild(inlineSpacer);
});
