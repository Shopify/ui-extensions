import {
  extend,
  Icon,
  InlineLayout,
  Pressable,
  Text,
} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const pressable = root.createComponent(
    Pressable,
    {
      border: 'base',
      borderRadius: 'base',
      padding: 'base',
      onPress: () => console.log('onPress event'),
    },
    [
      root.createComponent(InlineLayout, {columns: ['fill', 'auto']}, [
        root.createComponent(Text, {}, 'Pressable'),
        root.createComponent(Icon, {source: 'chevronDown', size: 'small'}),
      ]),
    ],
  );

  root.appendChild(pressable);
});
