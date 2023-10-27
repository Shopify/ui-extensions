import {extend, Card} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const card = root.createComponent(
    Card,
    {padding: true},
    'Card',
  );

  root.appendChild(card);
});
