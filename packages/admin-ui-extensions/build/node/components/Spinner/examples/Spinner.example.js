"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const spinner = root.createComponent(_adminUiExtensions.Spinner);
  root.appendChild(spinner);
  setTimeout(() => {
    root.removeChild(spinner);
  }, 2000);
  root.mount();
});