import { extend, Card, CardSection } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var card = root.createComponent(Card, {});
  root.appendChild(card);
  var cardSection = root.createComponent(CardSection, {
    title: 'Sectional'
  });
  cardSection.appendChild('This is the best section.');
  card.appendChild(cardSection);
  var cardSection2 = root.createComponent(CardSection, {
    title: 'Loveseat'
  });
  cardSection.appendChild('No, this is the best section.');
  card.appendChild(cardSection2);
  root.mount();
});