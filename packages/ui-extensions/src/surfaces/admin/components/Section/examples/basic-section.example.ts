import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  root.innerHTML =
    '<shopify-section heading="Section heading">Section content</shopify-section>';
});
