import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const stack = document.createElement('shopify-stack');
  stack.direction = 'block';
  stack.gap = true;
  stack.append('Child 1', 'Child 2', 'Child 3', 'Child 4');

  root.appendChild(stack);
});
