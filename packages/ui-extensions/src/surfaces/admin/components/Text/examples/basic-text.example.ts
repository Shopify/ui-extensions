import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const stack = document.createElement('shopify-text');
  stack.direction = 'block';
  stack.alignment = 'center';
  stack.gap = true;
  root.appendChild(stack);

  const label = document.createElement('shopify-text');
  label.type = 'strong';
  label.textContent = 'Name:';
  stack.appendChild(label);

  const name = document.createElement('shopify-text');
  name.textContent = 'Jane Doe';
  stack.appendChild(name);
});
