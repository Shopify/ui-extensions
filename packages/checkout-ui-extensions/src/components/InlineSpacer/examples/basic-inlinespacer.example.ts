import {
  extend,
  InlineSpacer,
  InlineStack,
  View,
} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const inlineSpacer = root.createComponent(InlineStack, {spacing: 'none'}, [
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(InlineSpacer, {spacing: 'loose'}),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(InlineSpacer, {spacing: 'tight'}),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
    root.createComponent(InlineSpacer, {spacing: 'base'}),
    root.createComponent(View, {border: 'base', padding: 'base'}, 'View'),
  ]);

  root.appendChild(inlineSpacer);
});
