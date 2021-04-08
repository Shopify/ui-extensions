import {extend, ExtensionPoint, Badge} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const badge = root.createComponent(Badge, {
    message: 'Example message',
    status: 'success',
  });

  root.appendChild(badge);
  root.mount();
});
