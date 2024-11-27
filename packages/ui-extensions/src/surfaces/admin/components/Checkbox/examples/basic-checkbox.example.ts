import {extension} from '@shopify/ui-extensions/admin';

extension('Playground', (root) => {
  root.innerHTML =
    '<shopify-checkbox id="checkbox" name="checkbox">Save this information for next time</shopify-checkbox>';
});
