import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const image = document.createElement('shopify-image');
  image.alt = 'Pickaxe';
  image.src = 'https://shopify.dev/assets/icons/64/pickaxe-1.png';

  root.appendChild(image);
});
