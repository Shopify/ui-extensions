"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const options = [{
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
  let selected = [];
  const list = root.createComponent(_adminUiExtensions.OptionList, {
    title: 'OptionList title',
    options,
    allowMultiple: true,
    selected,
    onChange: newSelected => {
      console.log(`option selected: ${newSelected}`);
      selected = newSelected;
    }
  });
  root.appendChild(list);
  root.mount();
});