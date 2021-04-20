import {extend, Link} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const link = root.createComponent(Link, {
    url: 'https://shopify.com',
    external: true,
  });
  link.appendChild('The best product ever!');

  root.appendChild(link);

  root.mount();
});
