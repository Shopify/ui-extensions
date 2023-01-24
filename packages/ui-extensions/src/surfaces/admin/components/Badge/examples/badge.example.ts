import {extension, Badge} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const badge = root.createComponent(Badge, {
    message: 'Example message',
    status: 'success',
  });

  root.appendChild(badge);
  root.mount();
});
