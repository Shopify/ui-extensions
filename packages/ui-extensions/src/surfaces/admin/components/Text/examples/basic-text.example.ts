import {extension} from '@shopify/ui-extensions/admin';

extension('Playground', (root) => {
  root.innerHTML =
    '<shopify-stack direction="block" gap alignment="center"><shopify-text type="strong">Name:</shopify-text><shopify-text>Jane Doe</shopify-text></shopify-stack>';
});
