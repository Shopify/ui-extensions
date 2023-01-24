import {extension, Button} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const button = root.createComponent(Button, {
    title: 'Settings',
    kind: 'primary',
    appearance: 'critical',
    size: 'large',
    inlineSize: 'fill',
    accessibilityLabel: 'open settings',
    disabled: false,
    onPress: () => console.log('Pressed'),
  });

  root.appendChild(button);
  root.mount();
});
