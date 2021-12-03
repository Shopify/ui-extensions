import { extend, Pressable, Text } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var pressable = root.createComponent(Pressable, {
    onPress: function onPress() {
      return console.log('I’ve been pressed!');
    }
  });
  var pressableText = root.createComponent(Text);
  pressableText.appendChild('I can be pressed');
  pressable.appendChild(pressableText);
  root.appendChild(pressable);
  root.mount();
});