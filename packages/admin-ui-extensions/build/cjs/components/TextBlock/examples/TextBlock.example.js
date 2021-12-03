"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var textBlock = root.createComponent(_adminUiExtensions.TextBlock, {
    size: 'small',
    variation: 'subdued'
  }, 'TextBlock');
  root.appendChild(textBlock);
  root.mount();
});