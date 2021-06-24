import {extend, Button} from '@shopify/admin-ui-extensions';

extend('Playground', (root) => {
  const button = root.createComponent(Button, {
    title: 'Press Me',
    primary: true,
    onPress: () => console.log('Pressed'),
    disabled: false,
  });

  root.appendChild(button);
  root.mount();
});
