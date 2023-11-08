import {extend, Tooltip} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const tooltip = root.createComponent(Tooltip, {}, 'You can find your CVV on the reverse of your card.');

  root.appendChild(tooltip);
  root.mount();
});