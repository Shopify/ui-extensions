import {extend, Pressable, Text} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const pressable = root.createComponent(Pressable, {
    onPress: () => console.log('I’ve been pressed!'),
  });

  const pressableText = root.createComponent(Text);
  pressableText.appendChild('I can be pressed');

  pressable.appendChild(pressableText);
  root.appendChild(pressable);

  root.mount();
});
