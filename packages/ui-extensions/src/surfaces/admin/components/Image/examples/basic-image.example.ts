import {extend, Image} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const image = root.createComponent(Image, {
    source:
      'https://shopify.dev/assets/api/ui-extensions/admin/components/image-example-code.png',
  });

  root.appendChild(image);
});
