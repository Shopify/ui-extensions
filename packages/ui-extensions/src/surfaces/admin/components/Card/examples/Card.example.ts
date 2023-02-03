import {extension, Card} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const card = root.createComponent(Card, {});

  card.appendChild('This is the best extension.');
  root.appendChild(card);

  root.mount();
});
