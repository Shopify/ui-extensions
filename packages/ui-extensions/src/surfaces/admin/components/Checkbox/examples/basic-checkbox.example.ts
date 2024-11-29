import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const checkbox = document.createElement('shopify-checkout');

  checkbox.id = 'checkbox';
  checkbox.name = 'checkbox';
  (checkbox.textContent = 'Save this information for next time'),
    root.appendChild(checkbox);
});
