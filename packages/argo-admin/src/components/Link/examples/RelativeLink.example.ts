import {extend, Link} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const productLink = root.createComponent(Link, {
    url: '/admin/products/12345',
  });
  productLink.appendChild('View product');

  root.appendChild(productLink);

  root.mount();
});
