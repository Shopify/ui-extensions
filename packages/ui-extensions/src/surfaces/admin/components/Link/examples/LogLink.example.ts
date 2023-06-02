import {extension, Link} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const logLink = root.createComponent(Link, {
    onPress: () => console.log('I was pressed'),
  });
  logLink.appendChild('I don’t do much.');

  root.appendChild(logLink);

  root.mount();
});
