import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const stack = document.createElement('shopify-stack');
  stack.direction = 'block';
  stack.alignment = 'center';
  stack.gap = 'true';
  stack.innerHTML =
    '<shopify-paragraph><shopify-text type="strong">Name:</shopify-text>Jane Doe</shopify-paragraph>';
  root.appendChild(stack);

  const paragraph = document.createElement('shopify-paragraph');
  stack.appendChild(paragraph);

  const label = document.createElement('shopify-text');
  label.type = 'strong';
  label.textContent = 'Name:';
  paragraph.appendChild(label);

  const name = document.createElement('shopify-text');
  name.textContent = 'Jane Doe';
  paragraph.appendChild(name);
});
