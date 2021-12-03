"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var button = root.createComponent(_adminUiExtensions.Button, {
    title: 'Settings',
    kind: 'primary',
    appearance: 'critical',
    size: 'large',
    inlineSize: 'fill',
    accessibilityLabel: 'open settings',
    disabled: false,
    onPress: function onPress() {
      return console.log('Pressed');
    }
  });
  root.appendChild(button);
  root.mount();
});