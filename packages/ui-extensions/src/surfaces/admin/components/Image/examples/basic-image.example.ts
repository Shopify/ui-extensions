import {
  extension,
  Image,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const image = root.createComponent(Image, {
      src: 'https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png',
      alt: 'Shopify logo',
    });

    root.appendChild(image);
  },
);
