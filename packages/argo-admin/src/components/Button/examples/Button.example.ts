import {extend, Button} from '@shopify/argo-admin';

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
