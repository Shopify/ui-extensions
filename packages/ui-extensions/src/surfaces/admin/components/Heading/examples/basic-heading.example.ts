import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const heading = document.createElement('shopify-heading');
  heading.textContent = 'Headings are cool';
  root.appendChild(heading);
});
