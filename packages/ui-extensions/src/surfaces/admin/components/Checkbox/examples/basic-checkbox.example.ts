import {extension} from '@shopify/ui-extensions/admin';

extension('Playground', (root) => {
  const checkbox = document.createElement('shopify-checkbox');
  checkbox.id = 'checkbox';
  checkbox.name = 'checkbox';
  checkbox.onchange = (event) => {
    console.log('checked: ', event.target.checked);
  };

  root.innerHTML =
    '<shopify-checkbox id="checkbox" name="checkbox">Save this information for next time</shopify-checkbox>';
});
