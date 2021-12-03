import { extend, Link } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var link = root.createComponent(Link, {
    url: 'https://shopify.com',
    external: true
  });
  link.appendChild('The best product ever!');
  root.appendChild(link);
  root.mount();
});