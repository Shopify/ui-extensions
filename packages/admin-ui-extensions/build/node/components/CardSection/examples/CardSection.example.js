"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const card = root.createComponent(_adminUiExtensions.Card, {});
  root.appendChild(card);
  const cardSection = root.createComponent(_adminUiExtensions.CardSection, {
    title: 'Sectional'
  });
  cardSection.appendChild('This is the best section.');
  card.appendChild(cardSection);
  const cardSection2 = root.createComponent(_adminUiExtensions.CardSection, {
    title: 'Loveseat'
  });
  cardSection.appendChild('No, this is the best section.');
  card.appendChild(cardSection2);
  root.mount();
});