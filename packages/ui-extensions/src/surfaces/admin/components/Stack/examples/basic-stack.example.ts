import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const stack = document.createElement('shopify-stack');

  stack.direction = 'block';
  stack.gap = true;

  stack.innerHTML =
    '<shopify-text>Child 1</shopify-text><shopify-text>Child 2</shopify-text><shopify-text>Child 3</shopify-text><shopify-text>Child 4</shopify-text>';

  root.appendChild(stack);
});
