import { extend, Badge } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var badge = root.createComponent(Badge, {
    message: 'Example message',
    status: 'success'
  });
  root.appendChild(badge);
  root.mount();
});