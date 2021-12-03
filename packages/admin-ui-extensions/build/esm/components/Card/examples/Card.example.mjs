import { extend, Card } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var card = root.createComponent(Card, {});
  card.appendChild('This is the best extension.');
  root.appendChild(card);
  root.mount();
});