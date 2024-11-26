import {extend} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const stack = document.createElement('shopify-stack');
  stack.direction = 'block';
  stack.alignment = 'center';
  stack.gap = 'true';
  stack.innerHTML =
    '<shopify-paragraph><shopify-text type="strong">Name:</shopify-text>Jane Doe</shopify-paragraph>';

  root.appendChild(stack);
});
