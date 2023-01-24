import {extension, Link} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const productLink = root.createComponent(Link, {
    url: '/admin/products/12345',
  });
  productLink.appendChild('View product');

  root.appendChild(productLink);

  root.mount();
});
