"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var formattedText = root.createComponent(_adminUiExtensions.Text, {
    appearance: 'success',
    emphasized: true,
    id: 'some_id',
    size: 'small',
    strong: true
  });
  formattedText.appendChild('Formatted text is awesome!');
  var simpleText = root.createText('This simple text is a bit less awesome');
  root.appendChild(formattedText);
  root.appendChild(simpleText);
  root.mount();
});