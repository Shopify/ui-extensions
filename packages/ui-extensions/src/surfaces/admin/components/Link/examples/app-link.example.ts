import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  root.innerHTML =
    '<shopify-link href="app://baz">Link to app path</shopify-link>';
});
