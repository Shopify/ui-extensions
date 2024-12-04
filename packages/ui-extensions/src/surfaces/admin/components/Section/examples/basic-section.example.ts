import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const section = document.createElement('shopify-section');
  section.heading = 'Section heading';
  section.textContent = 'Section content';

  root.appendChild(section);
});
