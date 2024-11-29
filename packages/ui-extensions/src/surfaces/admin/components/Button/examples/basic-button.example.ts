import {extension} from '@shopify/ui-extensions/admin';

extension('Playground', (root) => {
  const button = document.createElement('shopify-button');
  button.onpress = () => console.log('onPress event');
  button.textContent = 'Click here';
  root.appendChild(button);
});
