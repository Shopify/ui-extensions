import {extend, Button} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const button = document.createElement('shopify-button');
  button.onpress = () => console.log('onPress event');
  button.textContent = 'Click here';
  root.appendChild(button);
});
