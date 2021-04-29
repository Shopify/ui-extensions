import {extend, Card, CardSection} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const card = root.createComponent(Card, {});
  root.appendChild(card);

  const cardSection = root.createComponent(CardSection, {
    title: 'Sectional',
  });
  cardSection.appendChild('This is the best section.');
  card.appendChild(cardSection);

  const cardSection2 = root.createComponent(CardSection, {
    title: 'Loveseat',
  });
  cardSection.appendChild('No, this is the best section.');
  card.appendChild(cardSection2);

  root.mount();
});
