"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var card = root.createComponent(_adminUiExtensions.Card, {});
  card.appendChild('This is the best extension.');
  root.appendChild(card);
  root.mount();
});