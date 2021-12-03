"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const icon = root.createComponent(_adminUiExtensions.Icon, {
    source: 'cancelSmallMinor'
  });
  icon.appendChild('This is the best extension.');
  root.appendChild(icon);
  root.mount();
});