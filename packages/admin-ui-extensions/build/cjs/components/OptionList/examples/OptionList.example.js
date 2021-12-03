"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var options = [{
    label: 'Red',
    value: 'red',
    disabled: false
  }, {
    label: 'Green',
    value: 'green',
    disabled: false
  }, {
    label: 'Blue',
    value: 'blue',
    disabled: false
  }];
  var selected = [];
  var list = root.createComponent(_adminUiExtensions.OptionList, {
    title: 'OptionList title',
    options: options,
    allowMultiple: true,
    selected: selected,
    onChange: function onChange(newSelected) {
      console.log("option selected: ".concat(newSelected));
      selected = newSelected;
    }
  });
  root.appendChild(list);
  root.mount();
});