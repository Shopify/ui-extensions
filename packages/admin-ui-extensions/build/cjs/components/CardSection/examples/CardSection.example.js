"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var card = root.createComponent(_adminUiExtensions.Card, {});
  root.appendChild(card);
  var cardSection = root.createComponent(_adminUiExtensions.CardSection, {
    title: 'Sectional'
  });
  cardSection.appendChild('This is the best section.');
  card.appendChild(cardSection);
  var cardSection2 = root.createComponent(_adminUiExtensions.CardSection, {
    title: 'Loveseat'
  });
  cardSection.appendChild('No, this is the best section.');
  card.appendChild(cardSection2);
  root.mount();
});