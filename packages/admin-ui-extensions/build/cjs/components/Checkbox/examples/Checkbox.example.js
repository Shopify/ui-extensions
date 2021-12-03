"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var checkbox = root.createComponent(_adminUiExtensions.Checkbox, {
    label: 'Opt in to something cool',
    checked: true,
    onChange: function onChange() {
      return console.log('Checked');
    }
  });
  root.appendChild(checkbox);
  root.mount();
});