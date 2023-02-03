import {extension, InlineStack, Text} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const inlineStack = root.createComponent(InlineStack, {
    inlineAlignment: 'center',
    spacing: 'loose',
  }, [
    root.createComponent(Text, undefined, 'Items to stack'),
    root.createComponent(Text, undefined, 'Items to stack'),
    root.createComponent(Text, undefined, 'Items to stack'),
  ]);

  root.appendChild(inlineStack);

  root.mount();
});
