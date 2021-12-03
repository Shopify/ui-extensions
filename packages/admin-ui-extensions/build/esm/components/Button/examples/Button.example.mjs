import { extend, Button } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var button = root.createComponent(Button, {
    title: 'Settings',
    kind: 'primary',
    appearance: 'critical',
    size: 'large',
    inlineSize: 'fill',
    accessibilityLabel: 'open settings',
    disabled: false,
    onPress: function onPress() {
      return console.log('Pressed');
    }
  });
  root.appendChild(button);
  root.mount();
});