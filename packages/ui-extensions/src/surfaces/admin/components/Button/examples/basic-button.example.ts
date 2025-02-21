import {extension} from '@shopify/ui-extensions/admin';

extension('Playground', (root) => {
  const button = document.createElement('shopify-button');
  button.onclick = () => console.log('onClick event');
  button.textContent = 'Click here';
  root.appendChild(button);
});
