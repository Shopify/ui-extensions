import {extension, Link} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const link = root.createComponent(Link, {
    url: 'https://shopify.com',
    external: true,
  });
  link.appendChild('The best product ever!');

  root.appendChild(link);

  root.mount();
});
