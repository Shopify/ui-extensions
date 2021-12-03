"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

const options = [{
  label: 'Cool option',
  value: 'cool-option'
}, {
  label: 'Cooler option',
  value: 'cooler-option'
}, {
  label: 'Coolest option',
  value: 'coolest-option'
}];
(0, _adminUiExtensions.extend)('Playground', root => {
  const select = root.createComponent(_adminUiExtensions.Select, {
    label: 'Select an option',
    options,
    labelInline: true,
    onChange: value => console.log(value, 'was selected'),
    value: 'cooler-option'
  });
  root.appendChild(select);
  root.mount();
});