"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const button = root.createComponent(_adminUiExtensions.Button, {
    title: 'Settings',
    kind: 'primary',
    appearance: 'critical',
    size: 'large',
    inlineSize: 'fill',
    accessibilityLabel: 'open settings',
    disabled: false,
    onPress: () => console.log('Pressed')
  });
  root.appendChild(button);
  root.mount();
});