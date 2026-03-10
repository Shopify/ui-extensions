import {
  extension,
  InlineSpacer,
  InlineStack,
  View,
} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
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
