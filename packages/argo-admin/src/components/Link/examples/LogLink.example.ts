import {extend, Link} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const logLink = root.createComponent(Link, {
    onPress: () => console.log('I was pressed'),
  });
  logLink.appendChild('I don’t do much.');

  root.appendChild(logLink);

  root.mount();
});
