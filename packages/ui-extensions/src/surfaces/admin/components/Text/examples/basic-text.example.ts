import {extend, Text, BlockStack} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const text = root.createComponent(BlockStack, undefined, [
    root.createComponent(Text, {size: 'extraSmall'}, 'Extra Small'),
    root.createComponent(Text, {size: 'small'}, 'Small'),
    root.createComponent(Text, {size: 'base'}, 'Base'),
    root.createComponent(Text, {size: 'medium'}, 'Medium'),
    root.createComponent(Text, {size: 'large'}, 'Large'),
    root.createComponent(Text, {size: 'extraLarge'}, 'Extra Large'),
  ]);

  root.appendChild(text);
});
