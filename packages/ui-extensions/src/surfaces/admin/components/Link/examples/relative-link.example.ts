import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  root.innerHTML =
    '<shopify-link href="/baz">Link relative to current path</shopify-link>';
});
