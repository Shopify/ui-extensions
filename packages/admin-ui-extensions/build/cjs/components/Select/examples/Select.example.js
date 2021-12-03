"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

var options = [{
  label: 'Cool option',
  value: 'cool-option'
}, {
  label: 'Cooler option',
  value: 'cooler-option'
}, {
  label: 'Coolest option',
  value: 'coolest-option'
}];
(0, _adminUiExtensions.extend)('Playground', function (root) {
  var select = root.createComponent(_adminUiExtensions.Select, {
    label: 'Select an option',
    options: options,
    labelInline: true,
    onChange: function onChange(value) {
      return console.log(value, 'was selected');
    },
    value: 'cooler-option'
  });
  root.appendChild(select);
  root.mount();
});