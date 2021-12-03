import { extend, Link } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var productLink = root.createComponent(Link, {
    url: '/admin/products/12345'
  });
  productLink.appendChild('View product');
  root.appendChild(productLink);
  root.mount();
});