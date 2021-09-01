import {extend, Button} from '@shopify/admin-ui-extensions';

extend('Playground', (root) => {
  const button = root.createComponent(Button, {
    to: '/settings',
    kind: 'secondary',
    appearance: 'monochrome',
    size: 'large',
    inlineSize: 'fill',
    accessibilityLabel: 'open settings',
    disabled: false,
    onPress: () => console.log('Pressed'),
  });


  button.appendChild('Settings');

  root.appendChild(button);
  root.mount();
});
